import Image from "next/image";
import {Inter} from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({subsets: ["latin"]});

export default function Solution() {
    return (
        <Layout>
            <div className={"w-full max-w-[1280px] flex flex-col items-center text-center px-5"}>
                <div className={"w-full flex md:flex-row xs:flex-col gap-10"}>
                    <section className={"w-full flex flex-col items-center gap-2 animate__animated animate__fadeInUp"}>
                        <div className={"relative lg:w-[600px] h-[400px] xs:w-full"}>
                            <Image src={"/slot.jpeg"} fill alt={"slot"}/>
                            <div className={"w-full absolute sm:text-[35px] xs:text-[25px] top-[50%] left-[50%]"}
                                 style={{
                                     transform: 'translate(-50%, -50%)',
                                     fontFamily: "Freesentation-9Black"
                                 }}
                            >
                                CASINO & SLOT<br/>
                                카지노 슬롯 솔루션
                            </div>
                        </div>
                        <b className={"sm:text-[25px] xs:text-[18px]"}
                           style={{
                               fontFamily: "Freesentation-9Black"
                           }}
                        >카지노&슬롯</b>
                        <div className={"whitespace-pre-wrap text-center sm:text-[18px] xs:text-[14px]"}>
                            {`10년 이상 카지노 솔루션 임대를 통한 업계 최고의 기술력을 바탕으로
고객의 니즈에 맞는 디자인 및 관리자 페이지 의 다양한 기능 제공
온라인 특화형 및 오프매장 특화형 기능 최적화되어
운영 특성에 맞는 특화형 솔루션을 제공합니다
​자체개발 소스로 24시간 즉각적이고 빠른 처리 및 대응
                            `}
                        </div>
                    </section>


                    <section className={"w-full flex flex-col items-center gap-2 animate__animated animate__fadeInUp"}
                             style={{
                                 animationDelay: "0.25s"
                             }}
                    >
                        <div className={"relative lg:w-[600px] h-[363px] xs:w-full "}>
                            <Image src={"/sports.png"} fill alt={"sports"}/>
                            <div className={"w-full absolute sm:text-[35px] xs:text-[25px] top-[50%] left-[50%]"}
                                 style={{
                                     transform: 'translate(-50%, -43%)',
                                     fontFamily: "Freesentation-9Black"
                                 }}
                            >
                                SPORTS and CASINO<br/>
                                스포츠 통합형 솔루션
                            </div>
                        </div>
                        <b className={"sm:text-[25px] xs:text-[18px]"}
                           style={{
                               fontFamily: "Freesentation-9Black"
                           }}
                        >스포츠 미니게임 카지노 슬롯 통합형 솔루션</b>
                        <div className={"whitespace-pre-wrap text-center sm:text-[18px] xs:text-[14px]"}>
                            {`다양한 기능 이 구현되어 있으며
수많은 임대를 통해 최적화된 솔루션 입니다
유저가 사용하기 편하고 최신 트렌드에 맞는 미니게임을 제공
스포츠 경기등록, 점수, 배당, 마감 자동으로 이루어 지며
관리자의 입맛대로 경기별 수동 배당 설정이 가능합니다
유저페이지 디자인 변경 가능​
                                `}
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
