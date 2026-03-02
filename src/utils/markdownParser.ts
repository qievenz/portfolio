/**
 * Simple browser-safe markdown frontmatter parser.
 * Extracts key-value pairs from multiple blocks separated by "---"
 */
export const parseMarkdownData = (markdownContent: string) => {
    // Standardize line endings and split by "---"
    const chunks = markdownContent.replace(/\r\n/g, '\n').split(/\n---\n/);

    return chunks
        .filter(chunk => chunk.trim().length > 0)
        .map(chunk => {
            const lines = chunk.trim().split('\n').filter(l => l.trim() !== '---');
            const data: any = {};

            lines.forEach(line => {
                const colonIndex = line.indexOf(':');
                if (colonIndex === -1) return;

                const key = line.slice(0, colonIndex).trim();
                let value: any = line.slice(colonIndex + 1).trim();

                // Handle basic types (arrays, quoted strings)
                if (value.startsWith('[') && value.endsWith(']')) {
                    try {
                        // Attempt to parse as JSON if it looks like an array
                        const jsonStr = value.replace(/'/g, '"');
                        data[key] = JSON.parse(jsonStr);
                    } catch (e) {
                        // Fallback: manual split
                        data[key] = value.slice(1, -1).split(',').map((v: string) => v.trim().replace(/^["']|["']$/g, ''));
                    }
                } else {
                    // Remove quotes if present
                    data[key] = value.replace(/^["']|["']$/g, '');
                }
            });
            return data;
        })
        .filter(item => Object.keys(item).length > 0);
};
