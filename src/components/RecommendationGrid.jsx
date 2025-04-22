import React from "react";
import { Row, Col, Card, Rate } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

/*
 * RecommendationGrid.jsx
 * 
 * Props:
 *   recommendations: Array of objects with properties { id, title, coverUrl, rating, isFavorite }
 *   onToggleFavorite: function to toggle the favorite state for a given book id
 * 
 * Displays the recommended books in a 4-column grid layout. Each book shows its cover, title, star rating,
 * and a heart icon that can be toggled from outlined to filled state upon clicking.
 */

const RecommendationGrid = ({ recommendations, onToggleFavorite }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Recommended Books</h3>
      <Row gutter={[16, 16]}>
        {recommendations.map(book => (
          <Col key={book.id} span={6}>
            <Card
              cover={<img alt={book.title} src={book.coverUrl} style={{ height: '150px', objectFit: 'cover' }} />}
              actions={[
                book.isFavorite ? (
                  <HeartFilled
                    key="favorite"
                    onClick={() => onToggleFavorite(book.id)}
                    style={{ color: 'red' }}
                  />
                ) : (
                  <HeartOutlined key="favorite" onClick={() => onToggleFavorite(book.id)} />
                )
              ]}
            >
              <Card.Meta
                title={book.title}
                description={<Rate disabled defaultValue={book.rating} style={{ fontSize: '14px' }} />}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecommendationGrid;
