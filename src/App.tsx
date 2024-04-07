import { useDispatch } from "react-redux";
import "./App.css";
import { userSlice } from "./store/reducers/UserSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Триває завантаження...</h1>}
      {error && <h1>{error}</h1>}
      <p>{JSON.stringify(users, null, 2)}</p>
    </div>
  );
}

export default App;
