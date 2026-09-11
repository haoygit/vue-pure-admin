import{s as e}from"./objectSpread2-CaLVbc0v.js";import{b as t,ct as n,k as r,mt as i,vn as a}from"./runtime-core.esm-bundler-CcQP0ylW.js";import"./deepChat-D1fbjFdX.js";var o=r({__name:`Group`,setup(e){let r=a();return n(()=>{r.value.demo={response:e=>({text:`仅演示，如需AI服务，请参考 https://deepchat.dev/docs/connect`})}}),(e,n)=>(i(),t(`deep-chat`,{ref_key:`chatRef`,ref:r,auxiliaryStyle:`
    .deep-chat-top-message .message-bubble {
        border-top-left-radius: 5px !important;
        border-top-right-radius: 5px !important;
    }
    .deep-chat-middle-message .message-bubble {
        margin-top: 0px;
    }
    .deep-chat-bottom-message .message-bubble {
        margin-top: 0px;
        border-bottom-left-radius: 5px !important;
        border-bottom-right-radius: 5px !important;
    }
    .deep-chat-top-message.deep-chat-bottom-message .message-bubble {
      margin-top: 10px;
    }`,messageStyles:{default:{shared:{bubble:{borderRadius:`0px`}}}},textInput:{placeholder:{text:`发送消息`}},history:[{text:`组1`,role:`group1`},{text:`组2-1`,role:`group2`},{text:`组2-2`,role:`group2`},{text:`组2-3`,role:`group2`},{text:`组3-1`,role:`group3`},{text:`组3-2`,role:`group3`}],demo:!0},null,512))}}),s=e({default:()=>c}),c=o;export{s as n,c as t};