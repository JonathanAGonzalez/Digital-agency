import Head from 'next/head';

import favicon from '../../icons/favicon.png';

interface Props {
  children: React.ReactNode;
  title: string;
}

const LayoutMain = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#F6D44A" />
        <meta property="og:title" content="Digital Agency" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitalagency.com.ar" />
        <meta
          property="og:image"
          content="https://digitalagency.com.ar/images/opimage.png"
        />
        <script>
          {`(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:3214368,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </script>
        <meta property="og:description" content="Soluciones digitales" />
        <title>{`Digital Agency - ${title}`}</title>
        <link rel="icon" type="image/png" href={`${favicon.src}`} />
      </Head>

      <main style={{ background: '#161A23' }}>{children}</main>
    </>
  );
};

export default LayoutMain;
