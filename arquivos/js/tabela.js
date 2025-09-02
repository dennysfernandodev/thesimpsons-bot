const tabela = (prefix, NomeDoBot, pushname, sender, nomeLoja, numerodono, NickDono, tempo, hora) => {
return `  ~🛒~🛒~🛒~🛒~🛒~🛒~
     *KWIK-E-MART DO APU*
  ~🛒~🛒~🛒~🛒~🛒~🛒~

_"Obrigado, volte sempre!"_

┌─🍩 *INFORMAÇÕES DA LOJA*
│
├ 🏪 *Gerente:* ${nomeLoja}
├ 👑 *Dono do Bot:* ${NickDono}
├ 👋 *Saudação:* ${tempo}
├ ⏰ *Hora do Squishee:* ${hora}
├ 👤 *Cliente:* ${pushname}
│
└───────────

🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩
  *COMANDOS DA LOJA*
🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩

🟡 ${prefix}catalogo → _Ver os produtos (e os preços absurdos)_
🟡 ${prefix}produtos → _Receber os produtos no privado_
🟡 ${prefix}comprar → _[id] Adicionar ao seu carrinho_
🟡 ${prefix}meupedido → _Ver o que você já pegou_
🟡 ${prefix}cancelarpedido → _[id] Cancelar um item_
🟡 ${prefix}cancelarpedido → _Cancelar tudo (antes que o Homer coma)_
🟡 ${prefix}finalizar → _Pagar a conta pro Apu_
🟡 ${prefix}addproduto → _(Só o Apu pode usar)_
🟡 ${prefix}apagarpedidos → _(Só o Apu pode usar)_

 Woo hoo! by Obrabo DEV`;

}

exports.tabela = tabela;

