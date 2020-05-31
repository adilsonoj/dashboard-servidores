Vue.component("card", {
  props: ["title", "status"],
  template: ` <div class="card">
                      <div class="card-header">
                          <span class="card-title">
                              {{title}}
                          </span>
                          <div  :class="['status-info', this.status]"></div>
                      </div>
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  </div>`,
});
