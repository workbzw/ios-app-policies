'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.privacy': 'Privacy Policy',
    
    // Product Page
    'product.title': 'AiDimsum - Learn Cantonese with AI',
    'product.subtitle': 'Master Cantonese through intelligent, personalized learning',
    'product.hero.title': 'Learn Cantonese the Smart Way',
    'product.hero.description': 'AiDimsum is an AI-powered platform designed to help you master Cantonese through interactive lessons, real-time pronunciation feedback, and personalized learning paths.',
    
    // Features
    'features.title': 'Why Choose AiDimsum?',
    'features.ai.title': 'AI-Powered Learning',
    'features.ai.description': 'Advanced artificial intelligence adapts to your learning style and pace, providing personalized lessons and instant feedback.',
    'features.pronunciation.title': 'Pronunciation Practice',
    'features.pronunciation.description': 'Practice your Cantonese pronunciation with real-time feedback and native speaker audio examples.',
    'features.interactive.title': 'Interactive Lessons',
    'features.interactive.description': 'Engage with fun, interactive content including dialogues, games, and cultural insights about Cantonese-speaking regions.',
    'features.progress.title': 'Track Your Progress',
    'features.progress.description': 'Monitor your learning journey with detailed analytics and achievements to stay motivated.',
    'features.community.title': 'Learning Community',
    'features.community.description': 'Connect with fellow learners, practice conversations, and get support from our community of Cantonese enthusiasts.',
    
    // How It Works
    'howitworks.title': 'How It Works',
    'howitworks.step1.title': 'Sign Up',
    'howitworks.step1.description': 'Create your free account and take a quick assessment to determine your current level.',
    'howitworks.step2.title': 'Personalized Path',
    'howitworks.step2.description': 'Our AI creates a customized learning path based on your goals and current proficiency.',
    'howitworks.step3.title': 'Learn & Practice',
    'howitworks.step3.description': 'Engage with interactive lessons, practice pronunciation, and complete exercises at your own pace.',
    'howitworks.step4.title': 'Track Progress',
    'howitworks.step4.description': 'Monitor your improvement with detailed analytics and celebrate milestones along the way.',
    
    // CTA
    'cta.title': 'Ready to Start Learning?',
    'cta.description': 'Join thousands of learners mastering Cantonese with AiDimsum',
    'cta.button': 'Get Started Free',
    
    // Footer
    'footer.back': 'Back to Home',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.privacy': '隐私政策',
    
    // Product Page
    'product.title': 'AiDimsum - AI驱动的粤语学习平台',
    'product.subtitle': '通过智能个性化学习掌握粤语',
    'product.hero.title': '智能学习粤语',
    'product.hero.description': 'AiDimsum是一个AI驱动的平台，通过互动课程、实时发音反馈和个性化学习路径，帮助您掌握粤语。',
    
    // Features
    'features.title': '为什么选择AiDimsum？',
    'features.ai.title': 'AI驱动学习',
    'features.ai.description': '先进的人工智能会根据您的学习风格和节奏进行调整，提供个性化课程和即时反馈。',
    'features.pronunciation.title': '发音练习',
    'features.pronunciation.description': '通过实时反馈和母语者音频示例练习您的粤语发音。',
    'features.interactive.title': '互动课程',
    'features.interactive.description': '通过有趣的互动内容学习，包括对话、游戏和关于粤语地区的文化见解。',
    'features.progress.title': '跟踪进度',
    'features.progress.description': '通过详细的分析和成就来监控您的学习旅程，保持学习动力。',
    'features.community.title': '学习社区',
    'features.community.description': '与其他学习者联系，练习对话，并从我们的粤语爱好者社区获得支持。',
    
    // How It Works
    'howitworks.title': '如何使用',
    'howitworks.step1.title': '注册',
    'howitworks.step1.description': '创建您的免费账户，进行快速评估以确定您当前的水平。',
    'howitworks.step2.title': '个性化路径',
    'howitworks.step2.description': '我们的AI根据您的目标和当前水平创建定制化的学习路径。',
    'howitworks.step3.title': '学习与实践',
    'howitworks.step3.description': '参与互动课程，练习发音，并按照自己的节奏完成练习。',
    'howitworks.step4.title': '跟踪进度',
    'howitworks.step4.description': '通过详细的分析监控您的进步，并在学习过程中庆祝里程碑。',
    
    // CTA
    'cta.title': '准备开始学习了吗？',
    'cta.description': '加入数千名使用AiDimsum掌握粤语的学习者',
    'cta.button': '免费开始',
    
    // Footer
    'footer.back': '返回首页',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

