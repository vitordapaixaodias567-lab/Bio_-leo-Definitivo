// Endereços da área da empresa. Ao publicar, troque pelos endereços reais (ex.: https://api.seudominio.com.br).
const EMPRESA_HOST = location.hostname || 'localhost';
const EMPRESA_API = `http://${EMPRESA_HOST}:3000`;  // backend: agendamentos, rastreio e avisos
const EMPRESA_SITE = `http://${EMPRESA_HOST}:5173`; // site da empresa: rastreio e painel
