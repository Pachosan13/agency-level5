'use client';

interface BlogContentProps {
  html: string;
}

export function BlogContent({ html }: BlogContentProps) {
  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
