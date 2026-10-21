
function list(type) {
  if (type !== 'wa') {
    v.innerHTML = bar('Messages') +
      `<div class="content">
        <div class="tabs">iMessage <span>✎</span></div>
        ${lists.msg.map(c => `
          <button class="thread" data-a="chat-${c[4]}">
            <div class="avatar">${c[1]}</div>
            <div class="threadmain">
              <div class="threadname">${c[0]}</div>
              <div class="preview">${c[3]}</div>
            </div>
            <div class="time">${c[2]}</div>
          </button>`).join('')}
        <div class="clue"></div>
      </div>`;
    return;
  }

  v.innerHTML = `
    <div class="wa-screen">
      <header class="wa-header">
        <h1>WhatsApp</h1>
        <div class="wa-header-actions">
          <button type="button" aria-label="Camera">▣</button>
          <button type="button" aria-label="New chat">＋</button>
        </div>
      </header>

      <div class="wa-search-wrap">
        <span>⌕</span>
        <input class="wa-search" type="search"
          placeholder="Ask Meta AI or Search"
          aria-label="Search chats">
      </div>

      <nav class="wa-tabs" aria-label="WhatsApp sections">
        <button class="wa-tab active" type="button">All</button>
        <button class="wa-tab" type="button">Unread</button>
        <button class="wa-tab" type="button">Favorites</button>
        <button class="wa-tab" type="button">Groups</button>
      </nav>

      <div class="wa-section-title">CHATS</div>

      <div class="wa-list">
        ${lists.wa.map(c => `
          <button class="wa-person" data-a="chat-${c[4]}">
            <div class="wa-avatar">${c[1]}</div>
            <div class="wa-person-info">
              <div class="wa-person-title">
                <strong>${c[0]}</strong>
                <span class="wa-time">${c[2]}</span>
              </div>
              <span class="wa-preview">${c[3]}</span>
            </div>
          </button>`).join('')}
      </div>

      <footer class="wa-bottom-nav">
        <div class="wa-nav-item active"><span>◉</span>Chats</div>
        <div class="wa-nav-item"><span>◌</span>Updates</div>
        <div class="wa-nav-item"><span>◎</span>Communities</div>
        <div class="wa-nav-item"><span>⌕</span>Calls</div>
      </footer>
    </div>`;

  const search = v.querySelector('.wa-search');
  search.addEventListener('input', () => {
    const query = search.value.toLowerCase();
    v.querySelectorAll('.wa-person').forEach(row => {
      row.hidden = !row.textContent.toLowerCase().includes(query);
    });
  });
}
