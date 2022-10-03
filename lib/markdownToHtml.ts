import { remark } from 'remark'
import fromMarkdown from 'remark-html';
import withShiki from '@stefanprobst/remark-shiki';
import withHtmlInMarkdown from 'rehype-raw';
import toHast from 'remark-rehype';
import * as shiki from 'shiki';
import toHtml from 'rehype-stringify';


export default async function markdownToHtml(markdown: string) {
  const highlighter = await shiki.getHighlighter({ theme: 'github-light' });

  const result = await remark()
    .use(fromMarkdown)
    .use(withShiki, { highlighter })
    .use(toHast, { allowDangerousHtml: true })
    .use(withHtmlInMarkdown)
    .use(toHtml)
    .process(markdown);

  return result.toString()
}
