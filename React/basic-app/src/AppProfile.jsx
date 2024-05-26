import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  return (
    <>
      <Profile
        image="https://images.unsplash.com/photo-1716477632783-91248c607b08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
        name="James Kim"
        title="프론트엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1716681864615-eb0c9260f1f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8://images.unsplash.com/photo-1716477632783-91248c607b08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1716553313539-92c68fde5bca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
        name="inseong Jeong"
        title="프론트엔드 개발자"
      />
    </>
  );
}

export default AppProfile;
