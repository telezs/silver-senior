import React from "react";
import { motion } from "framer-motion"
const missionAccordion = [
  {
    id: 0,
    title: "Our Mission",
    text: "Our mission is simple, yet impactful. To bring comfort, care and assistance to unprivileged elderly individuals in our community. As a non- profit organization, we claim that our only objective is not profit, but charity. All funds raised from our events will transparently and entirely be dedicated to supplying impoverished senior citizens with basic necessities such as foods and clothing. We strive to enhance their quality of life and well-being. Join us in our mission to make a difference in the lives of those who need it most!",
  },
  {
    id: 1,
    title: "Get To Know Us",
    text: "Silver Seniors is a non-profit organization established to raise funds and start volunteering opportunities in order to improve the lives of senior citizens. We are a youth-led club that aims to support the elderlies, especially those facing financial difficulties. Our sole objective is to provide utmost care and assistance to better the quality of life for those who have came before us.",
  },
  {
    id: 2,
    title: "Nhiệm Vụ",
    text: "Là một tổ chức phi lợi nhuận, mục tiêu chính của chúng tôi là gây quỹ từ thiện và đóng góp toàn bộ số tiền thu được vào hoạt động từ thiện, cụ thể là giúp đỡ người cao tuổi khó khăn và neo đơn. Mặc dù sứ mệnh của chúng tôi rất đơn giản nhưng chúng tôi mong muốn hoạt động gây quỹ giúp đỡ các cụ già sẽ đem lại nhiều ý nghĩa tinh thần và lan tỏa tình cảm sẻ chia ấm áp của thế hệ trẻ và của xã hội đến với họ. Chúng tôi sẽ đóng góp thời gian, công sức để tổ chức các hoạt động gây quỹ tại trường và bên ngoài. Số tiền thu được sẽ công khai minh bạch và được dành toàn bộ để mua quà và các nhu yếu phẩm, đồ dùng cần thiết cho người cao tuổi khó khăn và neo đơn tại các viện dưỡng lão. Hãy cùng chúng tôi hoàn thành sứ mệnh và lan tỏa tinh thần yêu thương cho những người cao tuổi đang gặp khó khăn tại Thành phố Hồ Chí Minh.",
  },
  {
    id: 3,
    title: "Thông Tin",
    text: "Silver Seniors là một tổ chức phi lợi nhuận được thành lập nhằm gây quỹ và bắt đầu các cơ hội tình nguyện nhằm cải thiện cuộc sống của người cao tuổi có hoàn cảnh khó khăn. Chúng tôi mong muốn được hỗ trợ người cao tuổi có hoàn cảnh khó khăn, người già neo đơn hoặc không có người thân chăm sóc, đặc biệt là những cụ già đang được chăm sóc tại các viện dưỡng lão và trung tâm bảo trợ xã hội TP. HCM. Hiện tại, chúng tôi đang thực hiện một số hoạt động quyên góp và tặng quà cho một viện dưỡng lão được nhiều người biết đến ở TP. HCM về sự tận tình chu đáo trong việc chăm sóc những người cao tuổi khó khăn và neo đơn. Thông qua việc tổ chức các sự kiện gây quỹ, chúng tôi mong muốn đóng góp và giúp đỡ một phần cho những người già yếu, cô đơn, không còn sức lao động và không có người thân chăm sóc.",
  },
];
export default function Mission() {
    const accordionMission = missionAccordion.map (mission =>
        <div className="accordion-items" key={mission.id}>
            <h1>{mission.title}</h1>
            <span>{mission.text}</span>
        </div>
    );

  return <div>
    <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 2, scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
    <div className="container-fluid" id="mission-accordion">
        <div className="row">
        <div className="bar-accordion" style={{borderRadius: '5px'}}>
            {accordionMission}
        </div>
        </div>
        <div className="container-fluid align-content-center" id="mission-intro">
    <h1>Learn More?</h1>
    <p>Click the icon below for an introduction of our team!</p> 
    <p>Nhấn vào biểu tượng bên dưới để tìm hiểu thêm về nhóm của chúng tôi!</p>
    <a data-mdb-ripple-init class="btn btn-mission btn-lg" href="/about" role="button">Learn More</a>
  </div>
    </div>
  </motion.div>
    
  </div>;
}
