import Image from "next/image";
import {Inter} from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <Layout>
            <div className={"w-full min-h-screen flex flex-col justify-center text-center text-white mt-[-50px] mb-[-50px] px-2"} style={{
                background: "center/cover no-repeat url('/background2.jpeg')"
            }}>
                <b className={"sm:text-[44px] xs:text-[25px]"}>솔루션 업계 1위! 퍼펙트 솔루션</b><br/><br/>
                <div className={"whitespace-pre-wrap text-center sm:text-[20px] xs:text-[16px]"}>
                    {`퍼펙트솔루션은 업계 최고의 전문가들로 이루어져 있어 
고객님들께 최상의 솔루션을 제공해 드립니다.

사이트 운영에 있어 개발자와의 소통은 가장 중요한 요소입니다. 
많은 개발업체 개발자가 24시간 시스템을 돌보지 않는 경우가 많습니다.
이는, 개발자가 귀사의 솔루션이 아닌 외주(프리랜서)일 경우입니다.
솔루션 선택을 할 때에는 반드시 상주 개발자가 있는 곳으로 계약을 하셔야 합니다. 

퍼펙트솔루션은 자체 개발자들이 24시간 귀하의 솔루션을 직접 케어하여
문제가 생긴 즉시 신속한 처리와 피드백으로 보다 안정적인 운영을 도와드립니다. 
          
          `}
                </div>
                <b className={"sm:text-[20px] xs:text-[16px]"}>카지노 솔루션 | 슬롯 솔루션 | 스포츠 솔루션 | 파워볼 솔루션 | FX 솔루션 | 홀덤 솔루션 | 정품 통합알 API | 자체 파싱알 API</b>
            </div>
        </Layout>
    );
}
