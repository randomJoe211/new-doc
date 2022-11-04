sudo apt update -y
# cn fonts
sudo apt install font-manager fonts-noto-cjk language-pack-zh-hans fonts-arphic-ukai fonts-arphic-uming fonts-ipafont-mincho fonts-ipafont-gothic fonts-unfonts-core

export LANG="zh_CN.UTF-8"
fc-match serif:lang=zh
fc-match sans-serif:lang=zh
