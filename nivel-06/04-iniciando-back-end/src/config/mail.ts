interface IMailConfig {
  driver: 'ethereal' | 'ses';

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
      email: 'victor@celularsr.com.br',
      name: 'Victor',
    },
  },
} as IMailConfig;
