import Image from "next/image";
import {Inter} from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({subsets: ["latin"]});

export default function Concerting() {
    return (
        <Layout>
            <div className={"w-full max-w-[1280px] min-h-screen flex flex-col items-center pt-[80px] px-5"}>
                <div className={"w-full flex flex-col gap-10"}>
                    <section className={"w-full flex flex-col gap-2"}>
                        <div className={"flex items-end border-b-2 border-white w-full pb-2"} style={{
                            fontFamily: "Freesentation-9Black, sans-serif",
                        }}>
                            <span className={"sm:text-[30px] xs:text-[20px]"}>Website Games Design</span>
                            <span className={"sm:text-[18px] xs:text-[14px] ml-1 mb-1"}>디자인 제작</span>
                        </div>
                        <div className={"w-full flex md:flex-row xs:flex-col items-center gap-10"}>
                            <div className={"relative md:w-[600px] h-[350px] xs:w-full"}>
                                <Image src={"/design.jpeg"} fill alt={"design"}/>
                            </div>
                            <div className={"w-full whitespace-pre-wrap text-[14px]"}>
                                {`기업 및 단체 또는 개인을 온라인으로 알릴 수 있는 대중적인 전략의
효과적인 홍보수단은 바로 사이트 디자인입니다.

유져가 카지노 사이트에 접속하여 가장 먼저 접하는 것은 사이트 메인 디자인 입니다.
디자인의 시각적인 요소가 잘 구성되어 있다면,
사이트에 대한 고객의 신뢰도는 한층 높아질 것이며,
이는 사이트를 활성화 시킬수 있는 대중화 전략에도 영향을 끼치게 됩니다.

고객의 신뢰를 갖지 못하는 사이트는 고객이 믿고 편한히 게임을 진행할 수 있는
환경을 제공할 수 없음으로 영업에도 큰 타격을 입게 되는 것입니다.
+고객의 사이트에 대한 신뢰도에 있어 디자인도 큰 영향력을 발휘하게 됩니다.

최신트렌드의 WEBSITE의 디자인을 제작 개발하여,
반응형/웹표준, HTML5, CSS3와 같은 최신기술을 효과적으로 접목함과 동시에 
최고의 디자인을 선사해 드립니다.
                            `}
                            </div>
                        </div>
                    </section>

                    <section className={"w-full flex flex-col gap-2"}>
                        <div className={"flex items-end border-b-2 border-white w-full pb-2"} style={{
                            fontFamily : "Freesentation-9Black"
                        }}>
                            <span className={"sm:text-[30px] xs:text-[20px]"}>Game API</span>
                            <span className={"sm:text-[18px] xs:text-[14px] ml-1 mb-1"}>API연동 / API 세팅</span>
                        </div>
                        <div className={"w-full flex md:flex-row xs:flex-col items-center gap-10"}>
                            <div className={"relative md:w-[600px] h-[350px] xs:w-full"}>
                                <Image src={"/api.jpeg"} fill alt={"api"}/>
                            </div>
                            <div className={"w-full whitespace-pre-wrap text-[14px]"}>
                                {`API(Application Programming Interface,
응용 프로그램 프로그래밍 인터페이스)는 응용 프로그램에서 사용할 수 있도록,
운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻합니다.

다시 말해,
서버에 영상+ 관리자 + 사이트를 연동하여세팅하는 것을 API 연동이라 부르기도 합니다.

퍼펙트솔루션은 원활하고 안정적인 영상송출 기술과
신속하고 정확한 카지노 API 연동 기술력을 제공해 드립니다.
카지노 사이트 제작의 기본적인 카지노 알공급과 API를 원활하고 안정적으로 연동 해 드립니다.

위와 같이 게임 유통사의 게임 콘텐츠를공급하여 카지노API 연동을 해드리며,
유통사와 서로 협의하여 API연동과 셋팅을 같이 병행하는 방식으로 자체적인 API 세팅 개발도 가능합니다.
                            `}
                            </div>
                        </div>
                    </section>

                    <section className={"w-full flex flex-col gap-2"}>
                        <div className={"flex items-end border-b-2 border-white w-full pb-2"} style={{
                            fontFamily : "Freesentation-9Black"
                        }}>
                            <span className={"sm:text-[30px] xs:text-[20px]"}>Security management system</span>
                            <span className={"sm:text-[18px] xs:text-[14px] ml-1 mb-1"}>보안 관리 시스템</span>
                        </div>
                        <div className={"w-full flex md:flex-row xs:flex-col items-center gap-10"}>
                            <div className={"relative md:w-[600px] h-[350px] xs:w-full"}>
                                <Image src={"/security.jpeg"} fill alt={"security"}/>
                            </div>
                            <div className={"w-full whitespace-pre-wrap text-[14px]"}>
                                {`본사는 귀사의 모든 시스템에 철저한 보안망을  구현 할 것입니다.
고품질의 운영 서비스 제공 및 시스템에 대한 신뢰를 확보하기 위해서,
해킹과 같은 외부 위협 및 보안침해 사고에 대처할 수 있도록 통합/분산서버의 강력한보안을 제공해 드립니다.

가장 흔한 DDoS 공격 부터 최근 트렌드인 멀티벡터 공격, 어플리케이션 공격 (Slowloris, RUDY 등) 까지
전 범위의 DDoS 공격으로부터 귀사의 웹사이트를 예방/방지/보호를 할 것입니다.

Powerful GAME server security management.
S-gaming provides high-quality operational services and
To ensure trust in the system, External threats such as hacking and security
breaches,We provide a robust security system for unified / distributed servers to cope.
                            `}
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </Layout>
    );
}