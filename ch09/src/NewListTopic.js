import { useParams } from 'react-router-dom'

var contents = [
   { id: 1, title: '기사제목1', description: '기사내용. 어쩌고 저쩌고...' },
   { id: 2, title: '기사제목2', description: '기사내용. 어쩌고 저쩌고...' },
   { id: 3, title: '기사제목3', description: '기사내용. 어쩌고 저쩌고...' },
]

function NewsListTopic() {
   var params = useParams()
   var topic_id = params.news_id
   var selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }
   for (var i = 0; i < contents.length; i++) {
      let cur_id = contents[i].id
      if (topic_id == cur_id) {
         selected_topic = {
            title: contents[i].title,
            description: contents[i].description
         }
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
