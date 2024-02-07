import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import PageTitle from '../components/page-title'

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses Page</title>
      </Head>
      <Layout>
        <Header />
        <article className="max-w-3xl p-4 mx-auto -mt-4 md:p-0 md:-mt-0">
          <PageTitle>Uses Page</PageTitle>
          <div className="mt-5 prose max-w-none">
            <p>Halaman ini berisi daftar aplikasi yang biasa saya pakai.</p>
            <h2>Terminal dan Editor</h2>
            <figure>
              <Image
                src="/img/terminal.png"
                width="442"
                height="138"
                alt="Terminal laravel directory list"
                className="mx-auto shadow-lg"
              />
              <figcaption className="font-bold text-center">Terminal</figcaption>
            </figure>
            <figure>
              <Image
                src="/img/vscode.png"
                width="736"
                height="450"
                alt="VS Code Laravel"
                className="mx-auto shadow-lg"
              />
              <figcaption className="font-bold text-center">VS Code</figcaption>
            </figure>

            <ul>
              <li>
                <strong>Terminal: </strong>{" "}
                <a href="https://www.warp.dev">Warp</a> dengan tema `Light`.
              </li>
              <li>
                <strong>Editor: </strong>{" "}
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>{" "}
                dengan tema{" "}
                <a href="https://marketplace.visualstudio.com/items?itemName=Heron.firefox-devtools-theme">
                  Firefox Theme
                </a>
                .
              </li>
              <li>
                <strong>Font: </strong>{" "}
                <a href="https://www.jetbrains.com/lp/mono/">Jetbrains Mono</a>{" "}
                sebelumnya menggunakan{" "}
                <a href="https://github.com/tonsky/FiraCode">Fira Code</a>.
              </li>
              <li>
                <strong>Git Client: </strong>{" "}
                <a href="https://www.sublimemerge.com/">Sublime Merge</a>,
                ringan dan minimalis.
              </li>
              <li>
                <strong>Database Management: </strong>{" "}
                <a href="https://github.com/Sequel-Ace/Sequel-Ace">
                  Sequel Ace
                </a>
                , rebranding dari sequel pro yang sudah lama tidak aktif.
              </li>
            </ul>
            <h2>Aplikasi Pendukung</h2>
            <ul>
              <li>
                <a href="https://github.com/newmarcel/KeepingYouAwake">
                  <strong>Keeping You Awake</strong>
                </a>{" "}
                menjaga mac agar tidak sleep.
              </li>
              <li>
                <a href="https://rectangleapp.com/">
                  <strong>Rectangle</strong>
                </a>{" "}
                memindahkan, mengecilkan dan membesarkan jendela aplikasi.
              </li>
              <li>
                <a href="https://github.com/Caldis/Mos">
                  <strong>Mos</strong>
                </a>{" "}
                membuat scroll mouse jadi smooth.
              </li>
              <li>
                <a href="https://www.alfredapp.com/">
                  <strong>Alfred</strong>
                </a>{" "}
                meskipun mac punya spotlight, tapi alfred terasa lebih lancar
                dan punya tampilan yang lebih simpel.
              </li>
              <li>
                <a href="https://github.com/dwarvesf/hidden">
                  <strong>Hidden Bar</strong>
                </a>{" "}
                menyembunyikan icon di menu bar.
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/be-focused-focus-timer/id973130201">
                  <strong>Be Focused - Focus Timer</strong>
                </a>{" "}
                seperti namanya, timer untuk menjalankan task.
              </li>
              <li>
                <a href="https://sindresorhus.com/dato">
                  <strong>Dato</strong>
                </a>{" "}
                pengganti aplikasi kalender dan jam di menu bar. Aplikasi
                berbayar, tapi saya dapat gratis karena pembuatnya membagikan
                kupon.
              </li>
              <li>
                <a href="https://imageoptim.com/mac">
                  <strong>ImageOptim</strong>
                </a>{" "}
                aplikasi untuk mengcompress gambar.
              </li>
              <li>
                <a href="https://github.com/iina/iina">
                  <strong>IINA</strong>
                </a>{" "}
                the best app untuk membuka video.
              </li>
              <li>
                <a href="https://getkap.co/">
                  <strong>Kap</strong>
                </a>{" "}
                untuk merekam layar dan mengconvertnya menjadi file gif.
              </li>
              <li>
                <a href="https://iconset.io/">
                  <strong>Iconset</strong>
                </a>{" "}
                manajemen icon svg.
              </li>
            </ul>
          </div>
        </article>
      </Layout>
    </>
  )
}
