import type { Metadata } from "next"
import InquiryForm from "./InquiryForm"

export const metadata: Metadata = {
  title: "One Flea Market | Inquiry",
  description: "원플리마켓 문의 페이지 입니다."
}

const Inquiry = () => {
  return (
    <main className="flex flex-col h-[70%] justify-center">
      <nav>
        <h1 className="my-3 font-bold text-xl">문의하기</h1>
      </nav>
      <section>
        <InquiryForm />
      </section>
    </main>
  )
}

export default Inquiry
