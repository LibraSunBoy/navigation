const fs = require('fs');
const path = require('path');

function extractFirstTitle(filePath, fileName) {
    let content = fs.readFileSync(filePath, 'utf8');
    // 匹配第一个以 # 开头的标题行（支持1-6级标题）
    const headingMatch = content.match(/^#{1,6}\s+(.+)$/m);
    // 如果匹配成功，返回标题文本（不含#号和空格）
    return headingMatch ? headingMatch[1].trim() : fileName;
}

// 核心生成函数
function autoGenerateSidebar(baseDir = '') {
    const fullPath = path.join(__dirname, '../..', baseDir);
    const items = fs.readdirSync(fullPath);

    return items
        .filter(item => !item.startsWith('.') && item !== 'README.md')
        .map(item => {
            const itemPath = path.join(fullPath, item);
            const isDir = fs.statSync(itemPath).isDirectory();
            const name = path.parse(item).name;

            if (isDir) {
                return {
                    title: extractFirstTitle(itemPath, name),
                    collapsable: false, // 是否可折叠
                    children: autoGenerateSidebar(path.join(baseDir, item))
                };
            } else {
                return {
                    title: extractFirstTitle(itemPath, name),
                    collapsable: false, // 是否可折叠
                    path: `/${baseDir}/${name}`
                };
            }
        });
}

module.exports = {
    autoGenerateSidebar
};