// Kernel struct field offsets.
// Public data. FreeBSD-derived. Same values in the ps5-payload-dev SDK,
// OzRviju's engine, and stock FreeBSD 11 source.

const OFF = {
  // proc
  PROC_PID:              0xBC,
  PROC_UCRED:            0x40,
  PROC_FD:               0x48,
  PROC_DYNLIB:           0x3E8,

  // filedesc
  FILEDESC_OFILES:       0x00,
  FDESCENTTBL_HDR:       0x08,
  FILEDESCENT_SIZE:      0x30,

  // file
  FILE_F_DATA:           0x00,
  FILE_F_COUNT:          0x24,

  // socket
  SOCKET_SO_PCB:         0x18,
  INPCB_PKTOPTS:         0x120,
  IP6PO_RTHDR:           0x70,

  // pipe
  PIPE_SIGIO:            0xD0,
  SIGIO_PROC:            0x00,

  // vnode dirs
  FD_CDIR:               0x18,
  FD_RDIR:               0x10,
  FD_JDIR:               0x20,

  // ucred
  UCRED_CR_UID:          0x04,
  UCRED_CR_RUID:         0x08,
  UCRED_CR_SVUID:        0x0C,
  UCRED_CR_NGROUPS:      0x10,
  UCRED_CR_RGID:         0x14,
  UCRED_CR_SVGID:        0x18,
  UCRED_CR_SCEAUTHID:    0x58,
  UCRED_CR_SCECAPS0:     0x60,
  UCRED_CR_SCECAPS1:     0x68,
  UCRED_ATTRS_QWORD:     0x50,

  // dynlib
  DYNLIB_SC_START:       0x308,
  DYNLIB_SC_END:         0x310,
};

// Constants used with the structs above
const F_SETOWN  = 6;
const FIOSETOWN = 0x80047302;

export { OFF, F_SETOWN, FIOSETOWN };
