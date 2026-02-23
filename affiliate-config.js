// AFFILIATE LINKS CONFIGURATION
// Replace placeholder URLs with your affiliate links

const AFFILIATE_LINKS = {
    // AI Tools - High Commission (Replace with your affiliate links)
    'jasper': 'https://jasper.ai', // 30% recurring - REPLACE
    'surfer-seo': 'https://surferseo.com', // 25% recurring - REPLACE
    'copy-ai': 'https://copy.ai', // 45% first year - REPLACE
    'descript': 'https://descript.com', // 20% - REPLACE
    'heygen': 'https://heygen.com', // 20% - REPLACE

    // Non-affiliate (no commission programs or not signed up)
    'chatgpt': 'https://chat.openai.com',
    'claude': 'https://claude.ai',
    'midjourney': 'https://midjourney.com',
    'runway': 'https://runwayml.com',
    'elevenlabs': 'https://elevenlabs.io',
    'copilot': 'https://github.com/features/copilot',
    'notion': 'https://notion.so',
    'canva': 'https://canva.com',
    'grammarly': 'https://grammarly.com',
    'otter': 'https://otter.ai',
    'synthesia': 'https://synthesia.io',
    'dallE': 'https://openai.com/dall-e-3',
    'stable-diffusion': 'https://stability.ai',
    'perplexity': 'https://perplexity.ai',
    'poe': 'https://poe.com'
};

// Priority affiliate signups (highest commission)
const PRIORITY_AFFILIATES = [
    { name: 'Jasper', signup: 'jasper.ai/partners', commission: '30% recurring' },
    { name: 'Surfer SEO', signup: 'surferseo.com/affiliates', commission: '25% recurring' },
    { name: 'Copy.ai', signup: 'copy.ai/affiliates', commission: '45% first year' },
    { name: 'Descript', signup: 'descript.com/affiliates', commission: '20%' },
    { name: 'HeyGen', signup: 'heygen.com/affiliate', commission: '20%' }
];

// Function to get affiliate link (falls back to regular URL if not set)
function getAffiliateLink(toolName) {
    const key = toolName.toLowerCase().replace(/\s+/g, '-');
    return AFFILIATE_LINKS[key] || '#';
}
