import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker, FaCogs } from 'react-icons/fa';

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
        <p className="text-sm">서비스/프로덕트를 만드는 것을 좋아하는 백엔드 엔지니어입니다. 효율적이고 확장 가능한 시스템을 설계하고 개발하는 데 열정을 가지고 있습니다.</p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">기술 스택</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaNodeJs className="text-green-500 transform transition-colors duration-300 hover:text-green-700" /> 백엔드
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaDatabase className="text-yellow-500 transform transition-colors duration-300 hover:text-yellow-700" /> 데이터베이스
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaAws className="text-purple-500 transform transition-colors duration-300 hover:text-purple-700" /> 인프라
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>AWS</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Kubernetes</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
              <FaCogs className="text-gray-500 transform transition-colors duration-300 hover:text-gray-700" /> 기타 도구
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>GraphQL</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">경력</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">롯데e커머스</h3>
          <p className="text-xs text-gray-500">2022.12 - 2024.12 (2년)</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>트레이너 프로필 서비스 개발</li>
            <li>개인 항목으로 기획, 디자인, 개발, 런칭까지 담당</li>
            <li>운동 관련 영상을 제공하는 WATCH 기능 개발</li>
          </ul>
        </div>

        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">코리아이플랫폼</h3>
          <p className="text-xs text-gray-500">2021.09 - 2022.06 (0년 9개월)</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>초기 프로덕트 개발에 참여하여 백엔드 파트 담당</li>
            <li>API 설계 및 관리, DB 최적화 작업</li>
            <li>배포 및 운영 자동화 시스템 구축</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">프로젝트</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">프로젝트 이름</h3>
          <p className="text-xs text-gray-500">설명: 프로젝트에 대한 간단한 설명</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            <li>기능 1</li>
            <li>기능 2</li>
            <li>기능 3</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">교육</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">인천대학교 컴퓨터학부</h3>
          <p className="text-xs text-gray-500">데이터베이스 및 사물인터넷 서비스 연구실</p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 inline-block pb-1 mb-4">자격증</h2>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-medium text-gray-800">자격증 이름</h3>
          <p className="text-xs text-gray-500">발급기관 및 발급일</p>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;