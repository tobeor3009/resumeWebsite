import "@/app/globals.css";
import KoConfig from "@/config/ko"
import { IconLinkedIn, IconGithub } from "@/config/icon";
import { SpanBoldInvert, SpanSemiBold, SpanBlue, SpanBadge } from "@/app/_components/single_element";
import { PSubTitle } from "@/app/_components/single_element";
export default function Resume() {
  return (
    <div className="min-h-screen p-5 sm:p-40 gap-8 pb-20 w-full
                    font-[family-name:var(--font-geist-sans)]">
      
      <div className="w-full grid grid-cols-1">
        <div className="flex text-center w-full">
          <header className="text-center mb-8 mr-8">
            <h1 className="text-3xl font-bold">{KoConfig.name}</h1>
            <p style={{ color: "var(--foreground-secondary)" }}>{KoConfig.title}</p>
          </header>
          <section className="grid grid-cols-1 text-left w-full">
            <section className="grid grid-cols-2 text-left w-full">
              <div className="flex gap-4">
                <IconLinkedIn url={KoConfig.linkedInUrl} className="rounded-md transition-all duration-300 hover:scale-150"/>
                <IconGithub url={KoConfig.githubURL} className="rounded-md transition-all duration-300 hover:scale-150"/>
              </div>
            </section>
            <p>Email: {KoConfig.email}</p>
            <p>PhoneNumber: {KoConfig.phoneNumber}</p>
          </section>
        </div>
      </div>

      <section className="mt-8 mb-8 text-left w-full">
        <h1 className="border-b-4 pb-2 mb-4"><SpanBlue>About Me</SpanBlue></h1>
        <p className="mb-4 text-lg leading-relaxed">
        연구실에서 다양한 모델을 설계하고 직접 구현하여 <SpanBoldInvert>AI에 대한 깊은 이해</SpanBoldInvert>를 가지고 있습니다.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          또한, 아산병원 연구실에서 의사들에게 AI 교육을 전담한 경험을 바탕으로, 개발자와 고객 모두에게 이해하기 <SpanBoldInvert>쉽게 설명할 수 있는 능력</SpanBoldInvert>을 갖추고 있습니다.
        </p>
        <p className="text-lg leading-relaxed">
          이노룰스 RPA(Robotic Process Automation)를 개발했으며, 병원 데이터의 수집 자동화 등 단순 반복 노동의 자동화를 구축 및 적용하여 전체적인 <SpanBoldInvert>워크플로우(Workflow) 속도를 가속화한 경험</SpanBoldInvert>이 있습니다.
        </p>
      </section>

      <section className="mb-8 text-left w-full">
        <h2 className="border-b-4 pb-2 mb-4"><SpanBlue>Skills</SpanBlue></h2>
          <div className="grid grid-cols-2 mb-8">
            <PSubTitle className="mr-6">Machine Learning Frameworks</PSubTitle>
            <ul className="grid grid-cols-1 list-disc list-inside">
              <li className="text-lg ml-4">PyTorch</li>
              <li className="text-lg ml-4">Keras</li>
              <li className="text-lg ml-4">TensorFlow</li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <PSubTitle className="mr-6">Programming Languages</PSubTitle>
            <ul className="list-disc list-inside text-xl leading-relaxed">
              <li className="text-lg ml-4">Pytho</li>
              <li className="text-lg ml-4">Javascript</li>
              <li className="text-lg ml-4">Java</li>
              <li className="text-lg ml-4">SQL</li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <PSubTitle className="mr-6">Other Technical Tools</PSubTitle>
            <ul className="list-disc list-inside text-xl leading-relaxed">
              <li className="text-lg ml-4">Docker</li>
              <li className="text-lg ml-4">Kubernetes</li>
              <li className="text-lg ml-4">Git</li>
              <li className="text-lg ml-4">Linux Shell</li>
              <li className="text-lg ml-4">window setting evironment</li>
            </ul>
          </div>
      </section>

      <section className="mb-8 text-left w-full">
        <h2 className="border-b-4 pb-2 mb-4"><SpanBlue>Area of Expertise</SpanBlue></h2>
        <h3 className="text-lg leading-relaxed">1. <SpanSemiBold>AI WorkFlow에 대한 총체적인 이해</SpanSemiBold>: AI WorkFlow의 전반을 모두 효율적으로 설계 및 구현 할 수 있습니다</h3>
        <h3 className="text-lg leading-relaxed">2. <SpanSemiBold>새로운 기술, Opensource에 대한 빠른 이해 및 적용</SpanSemiBold>: 새로운 tool과 오픈소스에 빠르게 적응, 분석하여 필요할때 빠르게 적용 할 수 있습니다.</h3>
        <h3 className="text-lg leading-relaxed">3. <SpanSemiBold>Python 고급 엔지니어링 및 딥러닝 알고리즘</SpanSemiBold>: 남들이 읽기 쉽게 잘 구조화된 코드를 작성하며, 이는 딥러닝 로직과 알고리즘, 데이터 전처리까지 모든 분야를 포함합니다.</h3>
        <h3 className="text-lg leading-relaxed">4. <SpanSemiBold>RPA 개발 및 실무 적용 경험</SpanSemiBold>: RPA(Robotic Process Automation)에 대한 개발 경험 및 사용경험으로, 데이터 수집, 분석, 처리까지 반복적인 수작업을 효율화 할 수 있습니다.</h3>
        <h3 className="text-lg leading-relaxed">5. <SpanSemiBold>의료 데이터 처리 전문가</SpanSemiBold>: 다양한 의료 데이터를 다룬 경험으로, 이미지에 대한 처리, 변환, 대규모 처리까지 잘 수행합니다.</h3>
        <h3 className="text-lg leading-relaxed">6. <SpanSemiBold>커뮤니케이션과 교육</SpanSemiBold>: 위와 같은 경험을 바탕으로, 고객의 수준에 맞춰 AI를 잘 설명할 수 있으며, 다른 Domain을 가지고 있는사람과 개발자들의 소통을 잘 중개할 수 있습니다.</h3>
        <h3 className="text-lg leading-relaxed">7. <SpanSemiBold>배터리와 EV에 대한 관심 및 이해</SpanSemiBold>: 배터리의 전반적인 생산 공정 및 작동에 대한 기초적인 이해, 끊임없는 관심을 가지고 있으며, 이는 전기차에도 해당됩니다.</h3>
      </section>

      <section className="text-left w-full">
        <h2 className="border-b-4 pb-2 mb-4"><SpanBlue>Degree</SpanBlue></h2>
        <div className="flex mb-8">
          <PSubTitle className="w-[200px] mr-6">울산대학교 대학원</PSubTitle>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="ml-4">
              <SpanSemiBold>Degree:</SpanSemiBold> 석사
            </li>
            <li className="ml-4">
              <SpanSemiBold>Major / Minor:</SpanSemiBold> 의공학전공
            </li>
            <li className="ml-4">
              <SpanSemiBold>Enrollment:</SpanSemiBold> 2021년 9월
            </li>
            <li className="ml-4">
              <SpanSemiBold>Course work Completed:</SpanSemiBold> 2024년 2월
            </li>
            <li className="ml-4">
              <SpanSemiBold>Status:</SpanSemiBold> 수료
            </li>
          </ul>
        </div>
        <div className="flex mb-8">
          <PSubTitle className="w-[200px] mr-6">부산대학교</PSubTitle>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="ml-4">
              <SpanSemiBold>Degree:</SpanSemiBold> 학사
            </li>
            <li className="ml-4">
              <SpanSemiBold>Major / Minor:</SpanSemiBold> 수학 / 경제학
            </li>
            <li className="ml-4">
              <SpanSemiBold>Enrollment:</SpanSemiBold> 2012년 3월
            </li>
            <li className="ml-4">
              <SpanSemiBold>Graduation:</SpanSemiBold> 2019년 2월
            </li>
            <li className="ml-4">
              <SpanSemiBold>Status:</SpanSemiBold> 졸업
            </li>
          </ul>
        </div>
      </section>

      <section className="text-left w-full mb-8">
      <div className="flex grid-cols-2 border-b-4 justify-start items-center mb-4">
        <SpanBlue className="mr-2">경력</SpanBlue>
        <SpanBadge>총 5년 1개월</SpanBadge>
      </div>
      <div className="flex grid-cols-2 mb-8">
          <PSubTitle className="w-[200px] text-right whitespace-pre-wrap mr-6"> 2021년 6월 ~<br />   현재</PSubTitle>
          <div className="flex grid-cols-2">
            <h2 className="text-xl font-semibold mr-2">Asan Medical Center(AMC)</h2>
            <SpanBadge className="text-sm bg-blue-600 mr-2">재직 중</SpanBadge>
            <SpanBadge className="text-sm bg-[#17a2b8]">총 3년 7개월</SpanBadge>
            </div>
        </div>

        <div className="flex">
          <PSubTitle className="w-[200px] text-right text-sm whitespace-pre-wrap mr-6"> 2021년 6월 ~<br />   현재</PSubTitle>
          <PSubTitle className="text-base font-semibold">융합의료과</PSubTitle>
        </div>
        <div className="flex grid-cols-2">
          <div className="w-[200px] mr-6"></div>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>과제 수행 및 의료 AI 인공지능 연구</li>
              <li>각종 의료 데이터 대량 전처리 및 후가공</li>
              <li>수습 연구원 교육담당</li>
              <li>각 Task BaseLine 코드 작성 및 연구 계획 설립</li>
              <div className="flex">
                <li className="whitespace-nowrap mr-2">Skills Used</li>
                <SpanBadge className="text-xs mr-1">Pytorch</SpanBadge>
                <SpanBadge className="text-xs mr-1">Keras</SpanBadge>
                <SpanBadge className="text-xs mr-1">Pandas</SpanBadge>
                <SpanBadge className="text-xs mr-1">OpenCV</SpanBadge>
                <SpanBadge className="text-xs whitespace-nowrap mr-1">Scikit-learn</SpanBadge>
                <SpanBadge className="text-xs mr-1">Docker</SpanBadge>
                </div>
              <div className="flex">
                  <li className="whitespace-nowrap mr-2">Domain</li>
                  <SpanBadge className="text-xs mr-1">CT</SpanBadge>
                  <SpanBadge className="text-xs mr-1">Xray</SpanBadge>
                  <SpanBadge className="text-xs mr-1">MRI</SpanBadge>
                  <SpanBadge className="text-xs mr-1">Pathology</SpanBadge>
                  <SpanBadge className="text-xs mr-1">PNG</SpanBadge>
                </div>
                <div className="flex">
                  <li className="whitespace-nowrap mr-2">AI Task</li>
                  <SpanBadge className="text-xs mr-1">Classification</SpanBadge>
                  <SpanBadge className="text-xs mr-1">Regression</SpanBadge>
                  <SpanBadge className="text-xs mr-1">Segmentation</SpanBadge>
                  <SpanBadge className="text-xs mr-1">Generation</SpanBadge>
                  <SpanBadge className="text-xs mr-1">Diffusion</SpanBadge>
                </div>
            </ul>
        </div>
        <div className="flex grid-cols-2 mb-8">
          <PSubTitle className="w-[200px] text-right whitespace-pre-wrap mr-6"> 2020년 2월 ~<br />   2021년 5월</PSubTitle>
          <div className="flex grid-cols-2">
            <h2 className="text-xl font-semibold mr-1">이노룰스(Innorules)</h2>
            <SpanBadge className="text-sm bg-[#17a2b8]">총 1년 4개월</SpanBadge>
            </div>
        </div>

        <div className="flex grid-cols-2">
          <PSubTitle className="w-[200px] text-right text-sm whitespace-pre-wrap mr-6"> 2020년 2월 ~<br />   2020년 5월</PSubTitle>
          <PSubTitle className="text-base font-semibold">제품기술팀</PSubTitle>
        </div>
        <div className="flex grid-cols-2">
          <div className="w-[200px] mr-6"></div>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Java 기반 WebServer 제품운영 및 유지보수</li>
              <div className="flex grid-cols-2">
                <li className="whitespace-nowrap mr-1">Skills Used</li>
                <SpanBadge className="text-xs mr-1">Java</SpanBadge>
                <SpanBadge className="text-xs mr-1">RDBMS</SpanBadge>
                <SpanBadge className="text-xs mr-1">Linux</SpanBadge>
              </div>
            </ul>
        </div>        

        <div className="flex grid-cols-2">
          <PSubTitle className="w-[200px] text-right text-sm whitespace-pre-wrap mr-6"> 2020년 2월 ~<br />   2021년 5월</PSubTitle>
          <PSubTitle className="text-base font-semibold">RPA 제품 개발(국가과제 수행)</PSubTitle>
        </div>
        <div className="flex grid-cols-2">
          <div className="w-[200px] mr-6"></div>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Javascipt 기반 WebApp 개발 (Vue)</li>
              <li>Keras 기반 Captcha Solver 개발</li>
              <div className="flex">
                <li className="whitespace-nowrap mr-2">Skills Used</li>
                <SpanBadge className="text-xs mr-1">JavaScript</SpanBadge>
                <SpanBadge className="text-xs mr-1">Vue</SpanBadge>
                <SpanBadge className="text-xs mr-1">RDBMS</SpanBadge>
                <SpanBadge className="text-xs mr-1">MongoDB</SpanBadge>
                <SpanBadge className="text-xs mr-1">Linux</SpanBadge>
                <SpanBadge className="text-xs mr-1">Keras</SpanBadge>
              </div>
            </ul>
        </div>
      </section>

      <div className="text-left w-full mb-8">
      <div className="flex border-b-4 justify-start items-center mb-4">
        <SpanBlue className="mr-2">EXPERIENCE</SpanBlue>
      </div>
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-2">아산병원 (Asan Medical Center)</h2>
        {[
          {
            title: "Skin Patch Extraction",
            startDate: "2024년 12월",
            endDate: "2025년 1월",
            details: [
              "CelebA-HQ에서 Skin Patch 추출, 데이터 제공",
            ],
            skills: ["Png", "Data-Preprocessing"],
          },
          {
            title: "CT-Super Resolution",
            team: "3명 (1 정형외과 의사, 2 Developer)",
            startDate: "2023년 8월",
            endDate: "현재",
            details: [
              "2D 기반 CT super resolution 모델 개발",
              "Axial CT 데이터 추출, Ablation Study 및 평가",
            ],
            skills: ["PyTorch", "Pix2Pix", "DiffAE", "SimpleITK"],
          },
          {
            title: "OCT Segmentation",
            team: "2명 (1 MD, 1 Developer)",
            startDate: "2023년 6월",
            endDate: "현재",
            details: [
              "데이터 획득을 자동화하여 반복작업 감소 (SikuliX 사용)",
              "OCT image data 획득 및 전처리 수행",
              "Segmentation Ablation Study 및 논문 작성 중",
            ],
            skills: ["PyTorch", "Segmentation", "RPA"],
          },
          {
            title: "어린이보호구역 교통사고 연구",
            team: "2명 (1 법의학과 석사, 1 Developer)",
            startDate: "2023년 3월",
            endDate: "2024년 6월",
            details: [
              "스쿨존 사망률 분석, 데이터 결합 및 통계",
            ],
            skills: ["Pandas", "Multi-processing"],
          },
          {
            title: "CT Kernel Conversion",
            team: "3명 (1 정형외과 의사, 2 Developer)",
            startDate: "2023년 2월",
            endDate: "2023년 8월",
            details: [
              "CT slice thick 조절 및 Resizing 처리",
              "CT kernel conversion 모델 개발",
              "이미지 Sharp, blur 조절 Style Converter 개발",
            ],
            skills: ["Keras", "StarGAN", "SimpleITK"],
          },
          {
            title: "Xray Bone Density Regression",
            startDate: "2021년 6월",
            endDate: "2022년 4월",
            details: [
              "Xray 기반 Bone Density 예측, Label Distribution Learning 적용",
            ],
            skills: ["Xray", "PyTorch", "Regression"],
          },
          {
            title: "LVI Patch Classification",
            startDate: "2021년 6월",
            endDate: "2022년 4월",
            details: [
              "WSI 전처리, Multi-processing 대규모 데이터 처리",
              "병리 이미지 기반 암 중증도 판별 모델 구현",
            ],
            skills: ["Pathology", "Keras", "Classification"],
          },
        ].map((item, index) => (
          <div key={index}>
            <section className="flex grid-cols-2">
                <PSubTitle className="w-[200px] text-right text-xl whitespace-pre-wrap mr-6">{item.startDate} ~<br />   {item.endDate}</PSubTitle>
                <PSubTitle className="text-base font-semibold">{item.title}</PSubTitle>
            </section>
            <section className="flex grid-cols-2">
                <div className="w-[200px] mr-6"></div>
                  <ul className="list-disc list-inside ml-4 mb-4">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                    <div className="flex">
                      <li className="whitespace-nowrap mr-2">Skills Used</li>
                      {item.skills.map((skill, i) => (
                        <SpanBadge key={i} className="text-xs mr-1">{skill}</SpanBadge>
                      ))}
                    </div>
                  </ul>
            </section>
          </div>
        ))}
      </section>
      <h2 className="text-xl font-semibold mb-2">이노룰스 (InnoRules)</h2>
      <div className="flex grid-cols-2">
          <PSubTitle className="w-[200px] text-right text-xl whitespace-pre-wrap mr-6"> 2020년 6월 ~<br />   2021년 5월</PSubTitle>
          <PSubTitle className="text-base font-semibold">Development of InnoRPA</PSubTitle>
      </div>
      <div className="flex grid-cols-2">
          <div className="w-[200px] mr-6"></div>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Javascipt 기반 WebApp 개발 (Vue)</li>
              <li>Keras 기반 Captcha Solver 개발</li>
              <div className="flex">
                <li className="whitespace-nowrap mr-2">Skills Used</li>
                <SpanBadge className="text-xs mr-1">JavaScript</SpanBadge>
                <SpanBadge className="text-xs mr-1">Vue</SpanBadge>
                <SpanBadge className="text-xs mr-1">MongoDB</SpanBadge>
                <SpanBadge className="text-xs mr-1">Linux</SpanBadge>
                <SpanBadge className="text-xs mr-1">Keras</SpanBadge>
              </div>
            </ul>
      </div>
      </div>
    </div>
  );
}