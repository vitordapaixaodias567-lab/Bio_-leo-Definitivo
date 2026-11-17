// Ponto único de acesso à API e à chave da equipe (guardada só neste navegador).
// Em produção, defina VITE_API_URL (ex.: https://api.seudominio.com.br) antes do build.
export const API = import.meta.env.VITE_API_URL || `http://${location.hostname}:3000`;
export const STATUS = { AGENDADA: "Coleta agendada", ENTREGUE: "Frasco entregue", EM_ROTA: "Equipe a caminho", COLETADO: "Coletado", CANCELADA: "Cancelada" };
export const linkRastreio = (id, t) => `/rastreio/rastreio.html?id=${id}${t ? `&t=${t}` : ""}`;

// A mesma chave é usada pelo painel, pelo app do entregador e pela tela do termo (nome fixo no localStorage).
export const lerChave = () => {
  try { return localStorage.getItem("bioleo_admin_key") || ""; } catch { return ""; }
};
export const salvarChave = (k) => {
  try { localStorage.setItem("bioleo_admin_key", k); } catch { /* armazenamento bloqueado */ }
};
