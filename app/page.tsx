import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaNodeJs, FaDatabase, FaAws, FaCogs, FaJava } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa6';

const PortfolioPage = () => {
  return (
    <div className="container mx-auto max-w-screen-lg px-6 py-10 bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-10">
        <img 
          src="/profile.jpeg"
          className="mx-auto rounded-full w-32 h-32 mb-5 shadow-lg border-4 border-blue-500 transform transition duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">김진우</h1>
        <p className="text-sm text-gray-500 mb-2">kk4403@naver.com | 010-2995-2594</p>
        <p className="text-sm text-gray-600">
          GitHub: <a href="https://github.com/jinwooooooo" className="text-blue-600 hover:underline">https://github.com/jinwooooooo</a><br />
          Blog: <a href="https://hojinu.tistory.com" className="text-blue-600 hover:underline">https://hojinu.tistory.com</a>
        </p>
      </header>

      {/* About Section */}
      <section className="mb-8 bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold border-b-2 border-gray-700 inline-block pb-1 mb-4">자기소개</h2>
        <p className="text-sm">지속 성장하는 백엔드 엔지니어입니다. 효율적이고 확장 가능한 시스템을 설계하고 개발하는 데 열정을 가지고 있습니다.</p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">기술 스택</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaJava className="text-green-500 transform transition-colors duration-300 hover:text-green-700" /> 백엔드
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Java</li>
              <li>Spring Framework</li>
              <li>Spring Boot</li>
              <li>Spring Batch</li>
              <li>Mybatis</li>
              <li>JPA</li>
              <li>Restful API</li>
              <li>Junit</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaDatabase className="text-yellow-500 transform transition-colors duration-300 hover:text-yellow-700" /> 데이터베이스
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Aurora MySQL</li>
              <li>Redis</li>
              <li>InfluxDB</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaCloud className="text-purple-500 transform transition-colors duration-300 hover:text-purple-700" /> 인프라
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Kafka</li>
              <li>Docker</li>
              <li>Jenkins</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaCogs className="text-gray-500 transform transition-colors duration-300 hover:text-gray-700" /> 기타 도구
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Websquare</li>
              <li>Gitlab</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>whatap</li>
              <li>grafana</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">경력</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">롯데e커머스</h3>
          <p className="text-s text-gray-500">Product 개발팀</p>
          <p className="text-xs text-gray-500">2022.12 - 2024.12 (2년)</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>판매자 상품 데이터를 표준화/코드화/가공하여 신뢰성 있는 전시상품 관리</li>
            <li>상품속성/카탈로그/브랜드/카테고리 관련 배치 프로세스 개발 및 기초데이터 OpenAPI 제공</li>
            <li>MSA 간 데이터 동기화를 위한 ETL, Spring Batch Job, Confluent Kafka, Snowflake 활용</li>
            <li>Gitflow 브랜치 전략 사용, Jira 티켓 단위 개발 일정 산정</li>
          </ul>
        </div>

        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">코리아이플랫폼</h3>
          <p className="text-s text-gray-500">시스템운영팀</p>
          <p className="text-xs text-gray-500">2021.09 - 2022.06 (0년 9개월)</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>MRO 구매대행사이트 (www.koreab2b.com) 개발/운영 및 유지보수</li>
            <li>발주,구매,납품,마감 등 구매 파이프라인 개발 및 운영</li>
            <li>사내 S/R (System Request) 처리 (데이터 추출 및 보정)</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">프로젝트</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">룰베이스 배치 (C속성 ➔ M속성 코드화) 고도화</h3>
          <p className="text-xs text-gray-500">2024.09 ~ 2024.12</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>10초마다 스케줄링된 룰베이스 배치 실행 시 계속된 동일 사전 호출로 인한 자원 효율성 개선</li>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>C속성 ➔ M속성 전환 시 사용되는 롯데ON 전용 사전을 rdb ➔ redis 로 전환하여 캐싱 (응답속도 83% 증가 및 리소스 사용 감소)</li>
            </ul>
            <li>queue 용도로 사용하는 타켓 테이블 DB I/O ➔ Confluent Kafka Topic Pub/Sub 구조변경을 통한 RDB 리소스 사용 감소 (일당 약 35만건)</li>
            <li>parallel consumer 구현을 통한 멀티쓰레드 처리로 토픽 메세지 처리량 증가</li>
            <li className="font-medium text-gray-800">기술 스택 : Spring Framework, Java 8, JdbcTemplate, Aurora Mysql, Confluent Kafka, Redis, Daemon</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">속성 모듈 EC2 ➔ 롯데ON EKS POD 마이그레이션 및 레거시 개선</h3>
          <p className="text-xs text-gray-500">2024.03 ~ 2024.08</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>속성 모듈 EC2 인스턴스에서 제공중이던 서비스를 EKS POD 이관을 통해서 연 1000만원 비용(인스턴스 + EBS)절감</li>
            <li>백오피스/셀러오피스 속성 및 브랜드 등록 공통 화면 axboot ➔ websquare 레거시 개선을 통한 영업/거래처 사용성 증가</li>
            <li>속성/전시카테고리/표준카테고리/브랜드 관련 OpenAPI 파이프라인의 개선을 통한 응답 속도 증가 (약 22%)</li>
            <li className="font-medium text-gray-800">기술 스택 : Spring Boot, Java 8, MyBatis, Aurora Mysql, MongoDB, Restful API, Websquare</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">Gemini AI를 활용한 상품명 기반 브랜드정보 입력 자동화 (w.추천플랫폼팀)</h3>
          <p className="text-xs text-gray-500">2024.07 ~ 2024.08</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>일 평균 15,000건 매핑 (전체 카테고리로 확대 중)</li>
            <li>Snowflake warehouse 를 활용한 상품 및 브랜드 기초데이터 추천플랫폼팀에 제공</li>
            <li>Gemini AI 를 거쳐 업로드된 S3 파일 read 후 롯데ON 브랜드 매핑 정책 로직에 의한 브랜드 입력 배치 개발</li>
            <li>성공 및 실패 건수, 실패 사유를 시계열 데이터베이스인 InfluxDB 적재 후 Grafana 통해 시각화 대시보드 생성.</li>
            <li className="font-medium text-gray-800">기술 스택 : Spring Batch, Java 8, JdbcTemplate, Aurora Mysql, InfluxDB, Grafana</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">속성 공통 라이브러리 생성</h3>
          <p className="text-xs text-gray-500">2024.01 ~ 2024.02</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>속성 모듈의 배치, API, 어드민 프로젝트에서 공통으로 사용하는 모델, 서비스 로직의 중복을 줄이고 관리포인트를 단일화</li>
            <li>Gitlab MR ➔ EC2 내 docker container Jenkins ➔ nexus repository 배포 파이프라인 구성</li>
            <li>EC2 서버 내 인증정보를 기입한 settings.xml 파일을 컨테이너 관리영역으로 마운트 후 메이븐 빌드 및 배포하도록 설계</li>
            <li className="font-medium text-gray-800">기술 스택 : Spring Framework, Java 8, maven, Jenkins, Docker, Nexus</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">Confluent Kafka 전환</h3>
          <p className="text-xs text-gray-500">2024.01 ~ 2024.05</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>클라우드플랫폼팀과 협업하여 타 모듈 DB 테이블 데이터 연동 시 파이프라인 변경 작업을 통한 실시간 동기화 및 연동 비용 감소</li>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>AS-IS : 원천 DB ➔ ETL ➔ mongoDB ➔ 싱크 배치잡 스케줄링 ➔ 타겟 DB </li>
              <li>TO-BE : 원천 DB ➔ Debezium Source Connector ➔ Confluent Kafka ➔ Sink Connector ➔ 타겟 DB </li>
            </ul>
            <li className="font-medium text-gray-800">기술 스택 : Aurora Mysql, Confluent Kafka</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">품목고시 출시년월 - 신상품 연동 배치 개발</h3>
          <p className="text-xs text-gray-500">2023.10 ~ 2023.12</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>상품 등록 원천 DynamoDB 를 Snowflake-Jdbc 활용하여 품목고시 조회 후 자바 정규식을 통해 특정 형태로 정제하여 출시년월 추출하는 배치 개발</li>
            <li>입력된 출시년월을 토대로 롯데ON 신상품 정책 로직에 의해 신상품 여부값을 판단하는 배치 개발.</li>
            <li>검색개발팀에서 검색 순위 및 검색 화면 필터로 활용</li>
            <li className="font-medium text-gray-800">기술 스택 : Spring Batch, Java 8, DynamoDB, Aurora Mysql, Snowflake</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">MPD 활용한 카탈로그 매칭</h3>
          <p className="text-xs text-gray-500">2023.05 ~ 2023.08</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>통합상품 (MPD) 로 묶인 하위 판매자 상품의 로그를 일정 주기로 조회 후 카탈로그 매칭 타겟에 적재하는 배치 개발.</li>
            <li>메타테이블이 존재하지 않아 배치 프로세스가 다운될 케이스를 대비해 배치 완료 시점을 Update 후 조회 시 활용</li>
            <li className="font-medium text-gray-800">기술 스택 : Spring Batch, Java 8, Aurora Mysql, JdbcTemplate</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">사내 깃헙 코파일럿 도입 POC 참여</h3>
          <p className="text-xs text-gray-500">2024.04 ~ 2024.06</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>UI, FE, BE, APP 각 영역 총 6명 참가 </li>
            <li>개발 시간 단축도 및 내용, 주니어 개발자 기준 도움이 되는지 파악</li>
            <li className="font-medium text-gray-800">copliot 도입되어 사내 개발자 총 159명 활용 중</li>
          </ul>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">롯데ON 기술블로그 참여</h3>
          <p className="text-xs text-gray-500">2022.06 ~ 2022.12</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>교육생 최종 프로젝트 후 관련 내용 기술블로그 작성</li>
            <li>MSA 환경에서의 구조 설계 및 개발, 동기화 이슈, 기능 구현 내용 포함</li>
            <li>
              <a href="https://techblog.lotteon.com/%EB%AA%85%ED%92%88-%EB%B2%84%ED%8B%B0%EC%BB%AC-e-commerce-%ED%94%8C%EB%9E%AB%ED%8F%BC-luxon-1b1c5a246f72" className="text-blue-700 hover:underline">[링크] 신입사원 개발 정복기 #3. 명품 버티컬 E-Commerce 플랫폼 (LuxON)</a>
            </li>
          </ul>
        </div>
      </section>

      

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">교육</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">롯데e커머스</h3>
          <p className="text-xs text-gray-500">2022.06 ~ 2022.12</p>
          <p className="text-xs text-gray-500">기업 연계형 개발자 교육 (960시간)</p>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">한국 SW 산업협회</h3>
          <p className="text-xs text-gray-500">2021.09 ~ 2021.12</p>
          <p className="text-xs text-gray-500">JAVA 개발자 전문가 과정 (480시간)</p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">자격증</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">정보처리기사</h3>
          <p className="text-xs text-gray-500">2021.12.25</p>
        </div>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">SQLD</h3>
          <p className="text-xs text-gray-500">2021.12.17</p>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;