function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/offers" element={<OngoingOffersPage />} />
      </Routes>
    </Router>
  );

}

export default App;