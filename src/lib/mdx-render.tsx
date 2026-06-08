import { mdxComponentMap } from "@/mdx-components";
import { compile, run } from "@mdx-js/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import * as runtime from "react/jsx-runtime";

export async function MdxBody({ source }: { source: string }) {
  const code = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
        },
      ],
    ],
  });

  const { default: Content } = await run(String(code), {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return <Content components={mdxComponentMap} />;
}
