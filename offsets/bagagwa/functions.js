// Bagagwa kernel function RVAs.
// Origin unknown. Publicly circulating writeup. Not our work.
// Relative to 0xffffffff80000000 (kernel text base).

const aio_multi_wait           = 0x5c0210;  // syscall 663
const aio_mw_mode0_dispatch    = 0x5c08e5;
const aio_mw_cleanup           = 0x5c0da1;
const aio_mw_free              = 0x5c0f93;
const aio_waker                = 0x5c1d2d;
const aio_waker_off_dec1       = 0x00;
const aio_waker_off_dec2       = 0x08;
const aio_waker_off_lock       = 0x10;
const aio_waker_off_write32    = 0x20;
const aio_debug_info           = 0x5c3090;  // syscall 727
const aio_debug_copy           = 0x5c3325;
const osem_delete              = 0xe2632e;
const osem_delete_flag_jmp     = 0xe2635d;
const osem_open                = 0xe26120;
const osem_refcount_off        = 0x54;
const osem_flag_off            = 0x45;
const osem_size                = 0x60;

export {
  aio_multi_wait, aio_mw_mode0_dispatch, aio_mw_cleanup, aio_mw_free,
  aio_waker, aio_waker_off_dec1, aio_waker_off_dec2,
  aio_waker_off_lock, aio_waker_off_write32,
  aio_debug_info, aio_debug_copy,
  osem_delete, osem_delete_flag_jmp, osem_open,
  osem_refcount_off, osem_flag_off, osem_size,
};
