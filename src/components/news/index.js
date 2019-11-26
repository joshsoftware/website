import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';

const News = (props) => {
  return (
    <div className='section-content'>
    <ListGroup>
      {
        props.data.map((news) => (
          <ListGroupItem>
            <ListGroupItemText>
              {news.date}
            </ListGroupItemText>
            <a href={news.link} target="_blank" rel='noreferrer noopener'>
              <ListGroupItemHeading>
              {news.topic} {' '} <Badge pill>{news.site_name}</Badge>
              </ListGroupItemHeading>
            </a>
          </ListGroupItem>
        ))
      }
    </ListGroup>
    </div>
  )
}

News.defaultProps = {
  data: [
    {date: "10 Nov 2019", site_name: "Sakal Times", topic: "Swalekhan - Empowering the visually impaired to write", link: "https://www.sakaltimes.com/opinion/swalekhan-empowering-visually-impaired-write-42830"},
    {date: "15 April 2019", site_name: "India Tech Online", topic: "Evolution of Wearable technology in sports", link: "https://www.indiatechonline.com/special-feature.php?id=451.php"},
    {date: "3 April 2019", site_name: "Your Story", topic: "Artificial Intelligence is spurring a whole new kind of conversation in banks", link: "https://yourstory.com/2019/04/how-banks-and-financial-institutions-are-shifting-"},
    {date: "26 Nov 2018", site_name: "India tech online", topic: "Chatbots are the next Health Assistants", link: "https://www.indiatechonline.com/special-feature.php?id=434.php"},
    {date: "14 Nov 2018", site_name: "Your Story", topic: "In the age of Alexa and Siri, are chatbots the next health assistants?", link: "https://yourstory.com/2018/11/age-alexa-siri-chatbots-next-health-assistants"},
    {date: "17 June 2018", site_name: "Hindustan Times", topic: "Father’s day special No place higher than on your Daddy’s shoulders", link: "https://www.hindustantimes.com/pune-news/father-s-day-special-no-place-higher-than-on-your-daddy-s-shoulders/story-OONSRjhhRrgU59NBKacezN.html"},
    {date: "11 June 2018", site_name: "Your Story", topic: "How predicting manufacturing downtime using machine learning can ensure business success", link: "https://yourstory.com/2018/06/machine-learning-manufacturing-downtime-efficiency"},
    {date: "16 May 2018", site_name: "", topic: "Around 2000 docs using digital prescriptions across the country", link: "https://www.sakaltimes.com/pune/around-2000-docs-using-digital-prescriptions-across-country-18074"},
    {date: "8 Dec 2017", site_name: "India Tech Online", topic: "The case for Open Source", link: "https://www.indiatechonline.com/special-feature.php?id=392.php"},
    {date: "3 Dec 2017", site_name: "First Post", topic: "Startups Stand To Benefit Most From Open Source Technologies By Understanding It Before Embracing It", link: "https://www.firstpost.com/tech/news-analysis/startups-stand-to-benefit-most-from-open-source-technologies-by-understanding-it-before-embracing-it-4239439.html"},
    {date: "26 May 2017", site_name: "TOI", topic: "Tackling food wastage the IT way", link: "https://timesofindia.indiatimes.com/city/pune/tackling-food-wastage-the-it-way/articleshow/58841541.cms"},
    {date: "21 May 2017", site_name: "Indian Express", topic: "As global turmoil reaches Pune, city’s IT hub rocked by layoffs", link: "https://indianexpress.com/article/india/as-global-turmoil-reaches-pune-citys-it-hub-rocked-by-layoffs-4665907/"},
    {date: "15 March 2017", site_name: "Your Story", topic: "Know it before you embrace open source", link: "https://yourstory.com/mystory/487a9ce310-know-it-before-you-embrace-open-source"},
    {date: "1 Jan 2017", site_name: "Indian Express", topic: "Is Pune ready to go cashless?", link: "https://indianexpress.com/article/cities/pune/is-pune-ready-to-go-cashless-demonetisation-new-year-4453807/"},
    {date: "24 October 2016", site_name: "", topic: "Tech companies think out of the box to hire the best from campuses", link: "https://tech.economictimes.indiatimes.com/news/corporate/tech-companies-think-out-of-the-box-to-hire-the-best-from-campuses/54909324"},
    {date: "10 August 2016", site_name: "", topic: "The Paediatric Network -Providing technological benefits to the healthcare sector of India", link: "https://health.cxotv.news/2016/08/10/the-paediatric-network-providing-technological-benefits-to-the-healthcare-sector-of-india"},
    {date: "30 July 2016", site_name: "Golden Sparrow", topic: "Josh Software Putting web solutions, 'on the rails", link: "https://issuu.com/thegoldensparrow/docs/tgs_broadsheet_pages_july_30_pdf_fo/11"},
    {date: "6 July 2016", site_name: "Economic Times", topic: "Goodwill is the Source Code at this Open Coder Collective", link: "https://economictimes.indiatimes.com/tech/software/goodwill-is-the-source-code-at-this-open-coder-collective/articleshow/53070730.cms"},
    {date: "25 June 2015", site_name: "", topic: "Importance of Programming in today's Academia", link: "https://www.thehansindia.com/posts/index/Education-and-Careers/2015-06-25/Importance-of-Programming-in-todays-Academia/159351"},
    {date: "19 Dec 2014", site_name: "", topic: "An open source application to combat infant mortality rates in India", link: "https://www.ciol.com/open-source-application-combat-infant-mortality-rates-india/?fbclid=IwAR1w_23vIjNd81z_D3i2rZSt9V7IhB-RDzcoDBFdVrPg4tXRMSqTCYGXsKI"},
    {date: "2 Dec 2014", site_name: "", topic: "Start-up develops neonatal nutrition calculator for premature babies", link: "https://www.thehindubusinessline.com/info-tech/start-up-develops-neonatal-nutrition-calculator-for-premature-babies/article23110624.ece"}
  ]
}
export default News;
