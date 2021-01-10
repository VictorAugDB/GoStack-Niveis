interface IMailConfig {
  driver: 'ethereal' | 'sparkpost';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };

  host: string;

  port: number;

  secure: boolean;

  auth: {
    user: string;
    pass: string;
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'test@findgames.com.br',
      name: 'Victor',
    },
  },

  host: 'smtp.sparkpostmail.com',

  port: 587,

  secure: false,

  auth: {
    user: 'SMTP_Injection',

    pass: process.env.SPARKPOST_API_KEY,
  },
} as IMailConfig;
