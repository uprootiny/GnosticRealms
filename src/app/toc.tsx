import { GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

interface TocPageProps {
  tocMarkdown: string;
}

const TocPage: NextPage<TocPageProps> = ({ tocMarkdown }) => {
  return <ReactMarkdown>{tocMarkdown}</ReactMarkdown>;
};

export const getStaticProps: GetStaticProps<TocPageProps> = async () => {
  const response = await fetch('https://gnosticrealms.vercel.app/toc.md');
  const tocMarkdown = await response.text();

  return {
    props: {
      tocMarkdown,
    },
  };
};

export default TocPage;
