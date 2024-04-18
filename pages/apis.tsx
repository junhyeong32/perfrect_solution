import Image from "next/image";
import {Inter} from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({subsets: ["latin"]});
const array = new Array(3).fill(0)
const title = ["씨맥스", "스윅스", "아너링크"]
const desc = ["트랜스퍼 방식\n카지노&슬롯\n정품 통합", "심리스 방식\n카지노&슬롯\n정품 통합", "심리스, 트랜스퍼 제공\n카지노&슬롯\n정품 통합"]

export default function Apis() {
    return (
        <Layout>
            <div className={"w-full max-w-[1280px] flex flex-col items-center text-center px-5"}>
                <div className={"w-full flex md:flex-row xs:flex-col gap-10"}>
                    <section className={"w-full flex flex-col items-center gap-2"}>
                        <b className={"sm:text-[40px] xs:text-[30px]"} style={{
                            fontFamily: "Freesentation-9Black"
                        }}>카지노 & 슬롯 API</b>
                        <b className={"text-[20px]"} style={{
                            fontFamily: "Freesentation-9Black"
                        }}>API 에이전시</b>
                        <div className={"w-full flex sm:flex-row xs:flex-col gap-2 mt-10"}>
                            {array.map((a, key) =>
                                <div className={"w-full flex flex-col items-center gap-2"} key={key}>
                                    <div className={"relative lg:w-[200px] h-[200px] xs:w-full"}>
                                        <Image src={`/${key + 1}.png`} fill alt={"api"}/>
                                    </div>
                                    <b className={"sm:text-[24px] xs:text-[18px] mt-5"} style={{
                                        fontFamily: "Freesentation-9Black"
                                    }}>{title[key]}</b>
                                    <div className={"whitespace-pre-wrap text-center sm:text-[16px] xs:text-[14px]"}>
                                        {desc[key]}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>


                    <section className={"w-full flex flex-col items-center gap-2"}>
                        <b className={"sm:text-[40px] xs:text-[30px]"} style={{
                            fontFamily: "Freesentation-9Black"
                        }}>카지노 & 슬롯 파싱 API</b>
                        <b className={"text-[20px]"} style={{
                            fontFamily: "Freesentation-9Black"
                        }}>자체 개발한 파싱 API 를 제공합니다</b>
                        <div className={"flex flex-col items-center mt-10"}>
                            <Image src={"/gaming.png"} width={188} height={62} alt={"gaming"}/>
                            <div className={"whitespace-pre-wrap text-center text-[13px] mt-4"}>
                                {`에볼루션 자체 개발 파싱 버전은
정품과 모두 동일하게 개발되었습니다.
채팅시 정품에도 동일하게 채팅이 표출되며
정품과 모두 동일합니다 
유튜브 YOUTUBE 방송용
월 정액제 무제한 에볼 파싱알 방송 하실수 있게 다 세팅하여
진행해드리고 있습니다
                                `}
                            </div>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <Image src={"/play.png"} width={384} height={326} alt={"play"}/>
                            <div className={"whitespace-pre-wrap text-center text-[13px]"}>
                                {`에볼루션 자체 개발 파싱 버전은
정품과 모두 동일하게 개발되었습니다.
채팅시 정품에도 동일하게 채팅이 표출되며
정품과 모두 동일합니다 
유튜브 YOUTUBE 방송용
월 정액제 무제한 에볼 파싱알 방송 하실수 있게 다 세팅하여
진행해드리고 있습니다
                                `}

                            </div>

                        </div>
                    </section>
                </div>

                <div className={"bg-[#232323] px-10 py-4 text-center mt-20"}>
                    각 에이전시에서 제공되는 게임사 리스트 및 수수료는<br/>
                    텔레그램을 통해 24시 안내해드리고 있습니다

                </div>
            </div>
        </Layout>
    );
}
