import "./Dashboard.css"
function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
      <h1>ELVARA</h1>

      <button
        className="logout-button" 
        onClick={() => window.location.reload()}
      >
        Logout
      </button>
    </header>

    <main className="dashboard-content">

      <section className="welcome-section">
        <p className="dashboard-label">DASHBOARD</p>
        <h2>Welcome to ELVARA</h2>
        <p>
          You have successfully logged in to your account.
        </p>
      </section>

      <section className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Account</h3>
          <p>Your account is active.</p>
        </div>

        <div className="dashboard-card">
          <h3>Activity</h3>
          <p>You're ready to explore ELVARA.</p>
        </div>
      </section>
    </main>
    </div>
  );
}

export default Dashboard;