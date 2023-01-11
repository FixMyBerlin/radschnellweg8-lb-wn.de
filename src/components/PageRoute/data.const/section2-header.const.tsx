import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TSectionHeader } from './types'

export const section2Header: TSectionHeader = {
  id: 'teilstrecke-2',
  title: 'Teilstrecke 2: Friedhof Oßweil bis Waiblingen-Hegnach',
  owner: 'Baulastträger: Landkreis Ludwigsburg',
  intro: (
    <>
      Aus Richtung Oßweiler Ostfriedhof kommend, soll der Radschnellweg
      weitgehend auf vorhandenen Strecken nördlich der L 1140 führen und den
      derzeit nicht genutzten straßenbegleitenden Gehweg ersetzen. Der
      Radschnellweg unterquert die K 1666 mittels eines neuen
      Unterführungsbauwerks und die Landesstraße 1140 auf Höhe des Leutenecker
      Hofes mittels einer jetzt schon bestehenden Unterführung. Diese wird noch
      verbessert. Im Anschluss führt er dann auf bestehenden Wirtschaftswegen,
      die entsprechend ausgebaut werden, südlich der L 1140 weiter nach
      Neckargröningen. Ab dem Knotenpunkt der L 1100/L 1140 soll die Strecke auf
      bestehenden Wirtschaftswegen südlich der Landesstraße die Ortschaft
      streifen und dann – abhängig noch von den Planungen zur Neuen Mitte in
      Remseck – den Neckar überqueren. In Neckarrems geht es entlang der Rems
      zur L 1142. Der finale Ausbau zwischen dem Knotenpunkt L 1100/L 1140
      erfolgt erst im Rahmen der Umsetzung der „Neuen Mitte“. Ab dem Ortsausgang
      von Neckarrems verläuft der Weg immer parallel zur Landesstraße bis zur
      Kreisgrenze in Richtung Waiblingen-Hegnach.
    </>
  ),
  image: <StaticImage src="../assets/Teilstrecke-2.svg" alt="" />,
}
