import React, { useState, useEffect } from "react";

const DetailSection = ({ title, urls }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (urls.length > 0) {
      Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
        .then((data) => setItems(data))
        .catch((err) => console.error(err));
    }
  }, [urls]);

  if (!urls || urls.length === 0) return null;

  return (
    <div className="detail-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name || item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailSection;
