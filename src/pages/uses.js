import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"
import terminal from "../images/terminal.png"

const UsesPage = () => (
  <Layout>
    <SEO
      title="Uses"
      description="Halaman yang saya berisi daftar aplikasi yang biasa saya pakai."
    />
    <article>
      <PageTitle>Uses</PageTitle>
      <div className="mt-5 prose max-w-none">
        <p>Halaman ini berisi daftar aplikasi yang biasa saya pakai.</p>
        <h2>Terminal dan Editor</h2>
        {/* <img src={terminal} alt="Terminal laravel directory list" /> */}
        <ul>
          <li>
            <strong>Editor: </strong>{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>{" "}
            dengan tema{" "}
            <a href="https://github.com/thenikso/github-plus-theme">
              Github Plus
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
            <strong>Terminal: </strong> <a href="https://iterm2.com/">iTerm2</a>{" "}
            dengan tema default `Dark Background`.
          </li>
          <li>
            <strong>Git Client: </strong>{" "}
            <a href="https://www.sublimemerge.com/">Sublime Merge</a>, ringan
            dan minimalis.
          </li>
          <li>
            <strong>Database Management: </strong>{" "}
            <a href="https://github.com/Sequel-Ace/Sequel-Ace">Sequel Ace</a>,
            rebranding dari sequel pro yang sudah lama tidak aktif.
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
            meskipun mac punya spotlight, tapi alfred terasa lebih lancar dan
            punya tampilan yang lebih simpel.
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
            pengganti aplikasi kalender dan jam di menu bar. Aplikasi berbayar,
            tapi saya dapat gratis karena pembuatnya membagikan kupon.
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
)

export default UsesPage
