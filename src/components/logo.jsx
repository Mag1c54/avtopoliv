const AutoPolivLogo = () => (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          .logo-text {
            font: bold 24px sans-serif;
            fill: #007bff;
          }
          .droplet {
            fill: #00aaff;
          }
        `}
      </style>
      {/* Графический элемент – капля воды */}
      <path
        className="droplet"
        d="M100,10
           C75,40 75,70 100,80
           C125,70 125,40 100,10 Z"
      />
      {/* Название компании */}
      <text
        x="50%"
        y="95"
        textAnchor="middle"
        className="logo-text"
      >
        Автополив РФ
      </text>
    </svg>
  );
  
  export default AutoPolivLogo;
  