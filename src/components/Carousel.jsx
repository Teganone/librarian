import React from 'react';
import { Carousel as AntdCarousel } from 'antd';

/**
 * Carousel 组件
 * 展示图书馆活动、轮播图等内容。
 * 高度设置为400px，图片保持16:9比例，标题和描述文字以半透明背景覆盖在图片下方。
 */
const Carousel = () => {
  // 模拟轮播图数据
  const carouselData = [
    {
      image: 'https://via.placeholder.com/1200x675?text=活动1',
      title: '图书馆新活动',
      description: '参加我们的活动，开拓您的阅读视野',
    },
    {
      image: 'https://via.placeholder.com/1200x675?text=新书推荐',
      title: '新书推荐',
      description: '发现本月最新图书，品味阅读新体验',
    },
    {
      image: 'https://via.placeholder.com/1200x675?text=讲座',
      title: '专题讲座',
      description: '专家讲座，深入探讨热门话题',
    },
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <AntdCarousel autoplay>
        {carouselData.map((item, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '10px 20px',
              borderRadius: '4px',
              color: '#fff'
            }}>
              <h2 style={{ margin: 0 }}>{item.title}</h2>
              <p style={{ margin: 0 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
};

export default Carousel;
