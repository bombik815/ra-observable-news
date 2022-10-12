import React from 'react'

export default function News({item}) {
  const time = new Date(item.date).toLocaleTimeString('ru', {
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
  const str = item.text.split('&#8594;');
  const strText = str[0];
  const strLink = str[1];

  return (
    <>
      <div className='news'>
        <div className='news-header'>
          <img src="" alt="logo" />
          <div className='news-header-title'>
            <h4 className='header-title'>Университет интернет-профессий Нетология</h4>
            <div className='header-time'>{time}</div>
          </div>
        </div>

        <div className='news-main'>
          <p className='main-text'>{strText}
            <a href={strLink}>&#8594;</a>
          </p>
          <div className='main-content'>
            {item.attachments.map((el,i) => el.type === 'link' ? (
              <div key={i}>
                <p>{el.link.description}</p>
                <a href={el.link.url}>{el.link.title}</a>
              </div>
            ) : null)}
          </div>
        </div>

        <div className='news-footer'>
          <div className='footer-likes'>
            <span></span>
            <p>{item.likes.count}</p>
          </div>
          <div className='footer-comments'>
            <span></span>
            <p>{item.comments.count}</p>
          </div>
          <div className='footer-reposts'>
            <span></span>
            <p>{item.reposts.count}</p>
          </div>
          <div className='footer-views'>
            <span></span>
            <p>{item.views.count}</p>
          </div>
        </div>

      </div>
    </>
  )
}
