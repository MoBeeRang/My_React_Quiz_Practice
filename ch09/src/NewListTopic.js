import { useParams } from 'react-router-dom'
//컨텐츠의 타이틀, 내용을 공통출력하고,
//정해지지 않은 경로로 들어오면 not found 보여줌.
function NewsListTopic({ contents }) {
   var params = useParams()
   var topic_id = params.news_id
   var selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }
   for (var i = 0; i < contents.length; i++) {
      let cur_id = contents[i].id
      if (topic_id == cur_id) {
         selected_topic = contents[i]
         break
      }
   }

   return (
      <div>
         <h3>{selected_topic.title}</h3>
         {selected_topic.description}
      </div>
   )
}

export default NewsListTopic
