import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Simple demo auth
    if (username === "member" && password === "altafocus123") {
      localStorage.setItem("af_session", JSON.stringify({ username, loggedIn: true, loginTime: Date.now() }));
      navigate("/dashboard");
    } else {
      setError("Username atau password salah. Hubungi admin untuk akun member.");
    }
  };

  return (
    <Layout>
      <section className="hero-gradient min-h-[80vh] flex items-center justify-center section-padding pt-24">
        <div className="w-full max-w-md">
          <AnimatedSection>
            <GlassCard strong className="text-center">
              <h1 className="text-2xl font-bold mb-2">Member Area</h1>
              <p className="text-sm text-muted-foreground mb-6">Login untuk mengakses dashboard member.</p>
              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <Label htmlFor="user">Username</Label>
                  <Input id="user" required value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div>
                  <Label htmlFor="pass">Password</Label>
                  <Input id="pass" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" variant="hero" size="lg" className="w-full">Login</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">Demo: username <strong>member</strong>, password <strong>altafocus123</strong></p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
