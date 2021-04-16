import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const config ={
  width: "424px",
  height: "689px",
   floating: true,
};

const otherFontTheme = {

  background: '#0A84FF',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0A84FF',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#FFFFFF',
  botFontColor: '#2E2E2E',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: 'intro',
    message: '안녕하세요.',
    trigger: 'intro2',
  },
  {
    id: 'intro2',
    message: 'LabelingAI는 많은 인력이 필요한 크라우드 라벨링을 인공지능으로 자동화한 오토 라벨링 서비스를 제공합니다. 1차 작업자가 해야 했던 많은 공수를 획기적으로 절감하고, 최소한의 2차 검수 인원으로 많은 양의 학습 데이터 라벨링을 완료합니다..',
    trigger: 'intro3'
  },
  {
    id:'intro3',
    message:'(1/3) 현재 진행중인 라벨링 프로젝트가 있으신가요?',
    trigger:'intro-user',
    // end:true,
  },
  {
    id:'intro-user',
    // user:true,
    options:[
      {value:'y', label:'네', trigger:'yes-response'},
      {value:'n', label:'아니요', trigger:'no-response'},
    ]
  },
  {
    id:'yes-response',
    message:'(2/3) 작업 종류가 어떤 것인가요?',
    trigger:'workOptions',
  },
  {
    id:'no-response',
    message:'Sorry to hear that.',
    end:true,
  },
  {
    id:'workOptions',

    options:[
      {value:'물체인식 라벨링', label:'물체인식 라벨링', trigger:'object-response'},
      {value:'이미지 라벨링', label:'이미지 라벨링', trigger:'object-response'},
      {value:'엑셀데이터라벨링', label:'엑셀데이터라벨링', trigger:'object-response'},
      {value:'', label:'기타', trigger:'object-response'},
    ]
  },
  {
    id:'object-response',
    message:'(3/3) 필요한 라벨링 총 개수를 입력해주세요.',
    trigger:'intro-user2',
  },
  {
    id:'intro-user2',
    user:true,
    validator: (value) => {
      if (/^[0-9]{1,4}/.test(value))

      {
        return true;
      }
      else
      {
        return'Please input alphabet characters only.';
      }
    },
    trigger:'q-email',
  },
  {
    id:'q-email',
    message:'연락받으실 이메일 주소를 입력해주세요.',
    trigger:'email',
  },
  {
    id:'email',
    user:true,
    // placehold:'이메일을 입력해주세요';
    validator: (value) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
        return true;
      }
      else
      {
        return'Please enter a valid email.';
      }
    },
    trigger:'q-number',
  },
  {
    id:'q-number',
    message:'(마지막 설문) 연락 받으실 전화번호를 입력해주세요.',
    trigger:'phone',
  },
  {
    id:'phone',
    user:true,
    validator: (value) => {
      if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{4})$/.test(value))
      {
        return true;
      }
      else
      {
        return'Please enter a valid phone number.';
      }
    },
    trigger:'last',
  },
  {
    id:'last',
    message:'질문답이 완료되었습니다. 귀사의 AI TRANSFORMATION 적용을 위한 구체적인 상담 시간을 정하기 위해서 AI 컨설턴트가 영업일 2일 이내로 연락드리도록 하겠습니다. 감사합니다.',
    end:true,
  },

];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>

      <ChatBot steps={steps}
               {...config}
      />

    </React.StrictMode>

  </ThemeProvider>

);

export default ThemedExample;
