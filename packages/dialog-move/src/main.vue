<template>
  <transition name="fade">
    <div class="lh_dialog_bg" v-if="dialogShow" :style="BgStyle" @click="close">
      <div class="lh_dialog" id="lhDialog" :style="dialogStyle" @click.stop>
        <!-- header start -->
        <div class="lh_header" :style="headerStyle" @mousedown="mouseMove">
          <slot name="header">
            <div class="lh_title">
              <slot name="title">
                <span>title</span>
              </slot>
            </div>
            <div class="lh_close">
              <slot name="close">
                <span class="lh_close" @click="close">x</span>
              </slot>
            </div>
          </slot>
        </div>
        <!-- header end -->

        <!-- content start -->
        <section class="lh_content" :style="contentStyle">
          <slot name="content">
            <span>content</span>
          </slot>
        </section>
        <!-- content end -->

        <!-- footer start -->
        <footer class="lh_footer clearfix" :style="footerStyle" v-if="footerShow">
          <slot name="footer">
            <span>footer</span>
            <slot name="button">
              <button class="lh_btn_enter" @click="close">确定</button>
            </slot>
          </slot>
        </footer>
        <!-- footer end -->
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "dialog-move",
  props: {
    dialogStyle: {
      type: String,
      default: ""
    },
    footerShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    BgStyle: {
      type: String,
      default: ""
    },
    headerStyle: {
      type: String,
      default: ""
    },
    contentStyle: {
      type: String,
      default: ""
    },
    footerStyle: {
      type: String,
      default: ""
    },
    dialogShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    }
  },
  methods: {
    mouseMove(event) {
      const moveBox = document.getElementById("lhDialog");
      const distanceX = event.clientX - moveBox.offsetLeft;
      const distanceY = event.clientY - moveBox.offsetTop;
      document.onmousemove = function(ev) {
        const oevent = ev || event;
        moveBox.style.left = oevent.clientX - distanceX + "px";
        moveBox.style.top = oevent.clientY - distanceY + "px";
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    close() {
      this.$emit("update:dialogShow", false);
    }
  }
};
</script>
<style scoped>
button {
  outline: none;
}
.lh_dialog_bg {
  position: fixed;
  z-index: 999999999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: rgba(0, 0, 0, 0.45);
}
.lh_dialog {
  position: absolute;
  width: 520px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.lh_header {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  cursor: move;
}
.lh_title {
  font-size: 24px;
}
.lh_close {
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
}
.lh_content {
  padding: 15px;
}
.lh_footer {
  padding: 15px;
  border-top: 1px solid #eee;
}
.lh_btn_enter {
  padding: 5px 10px;
  float: right;
  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 6px;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 767px) {
  .lh_dialog {
    max-width: calc(100vw - 16px);
  }
}
</style>