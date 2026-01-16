import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile
        name="John Doe"
        age={25}
        bio="Frontend developer passionate about React."
      />
      <Footer />
    </>
  );
}

export default App;

import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;




import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
