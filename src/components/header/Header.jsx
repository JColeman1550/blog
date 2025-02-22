import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Julian's Dev</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
        className="headerImage" 
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" 
        alt="computer pic" />
    </div>
  );
}
