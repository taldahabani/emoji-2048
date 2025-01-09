import { useState } from 'react';
import { Bot, Coins, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Website = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">MemeBots.io</div>
          <div className="space-x-6">
            <button className="hover:text-purple-300">Protocol</button>
            <button className="hover:text-purple-300">How it Works</button>
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg">
              Connect Wallet
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg">
              Create New Agent
            </button>
          </div>
        </nav>
        
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold mb-6">
              AI-Powered Meme Coin Revolution
            </h1>
            <p className="text-xl mb-8">
              Create, promote, and dominate the meme coin space with autonomous AI agents.
              Own your MemeBot NFT and join the future of crypto culture.
            </p>
            <div className="space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 rounded-lg font-bold hover:opacity-90">
                Mint Your MemeBot
              </button>
              <button className="border border-purple-400 px-8 py-3 rounded-lg font-bold hover:bg-purple-800">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="pepe.png" alt="MemeBot Preview" className="rounded-2xl" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose MemeBots?</h2>
        <div className="grid grid-cols-3 gap-8">
          <FeatureCard
            icon={<Bot className="w-12 h-12 text-purple-400" />}
            title="AI-Powered Automation"
            description="Let your MemeBot handle promotion, engagement, and community building automatically."
          />
          <FeatureCard
            icon={<Coins className="w-12 h-12 text-purple-400" />}
            title="Create Your Meme Coin"
            description="Launch your own meme coin with just a few clicks. Your MemeBot handles distribution."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-purple-400" />}
            title="Viral Marketing"
            description="Leverage AI-driven content creation for maximum reach and engagement."
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-purple-800 bg-opacity-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How MemeBots Work</h2>
          <div className="grid grid-cols-4 gap-8">
            <Step number="1" title="Mint Your MemeBot" 
              description="Each NFT is a unique AI agent with its own personality." />
            <Step number="2" title="Activate & Configure" 
              description="Choose to promote existing coins or create your own." />
            <Step number="3" title="Watch it Grow" 
              description="Your MemeBot engages with the community automatically." />
            <Step number="4" title="Earn Rewards" 
              description="Profit from your bot's activity and coin performance." />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-8 text-center">
          <Stat number="1,000" label="MemeBots (500 New + 500 Established)" />
          <Stat number="$1B+" label="Total Volume" />
          <Stat number="100K+" label="Community Members" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don't miss out on the future of meme coins. Mint your MemeBot today and start
          building your crypto empire.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-700 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Column 1 - Logo and Copyright */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">MemeBots.io</div>
              <p className="text-sm text-purple-300">© 2024 MemeBots.io All Rights Reserved.</p>
              <button className="text-sm text-purple-300 hover:text-white">Legal Disclaimer</button>
            </div>
            
            {/* Column 2 - Documentation */}
            <div className="space-y-4">
              <h3 className="font-bold mb-2">Documentation</h3>
              <div className="space-y-2">
                <button className="block text-purple-300 hover:text-white">Whitepaper</button>
                <button className="block text-purple-300 hover:text-white">Governance Forum</button>
              </div>
            </div>
            
            {/* Column 3 - Community */}
            <div className="space-y-4">
              <h3 className="font-bold mb-2">Community</h3>
              <div className="space-y-2">
                <button className="block text-purple-300 hover:text-white">Telegram</button>
                <button className="block text-purple-300 hover:text-white">X</button>
                <button className="block text-purple-300 hover:text-white">YouTube</button>
                <button className="block text-purple-300 hover:text-white">Coingecko</button>
              </div>
            </div>
            
            {/* Column 4 - Token Info */}
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">A Public Good for</h3>
                <div className="text-xl font-bold text-purple-400">$MEMEBOT</div>
              </div>
              <div>
                <p className="text-sm text-purple-300">Contract Address:</p>
                <p className="text-sm font-mono text-purple-400">0x0b3e...4e7E1b</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-purple-800 bg-opacity-50 p-6 rounded-xl">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-purple-200">{description}</p>
  </div>
);

const Step = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-purple-200">{description}</p>
  </div>
);

const Stat = ({ number, label }) => (
  <div>
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-purple-200">{label}</div>
  </div>
);

export default Website;
