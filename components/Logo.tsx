import Link from 'next/link'

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src="/favicon.svg" />
      <Link href="/">
      <h2>
        Huawei OJ
      </h2></Link>
    </div>
  )
}
