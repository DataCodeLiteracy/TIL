{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, 'url' | 'data' | 'h'>; // 제외한 아이들을..

  function getVideo(id: string): VideoMetaData {
    return {
      id,
      title: 'video',
    };
  }

  function getVideoMetadata(id: string): Pick<Video, 'id' | 'title'> {
    return {
      id: id,
      title: 'title',
    };
  }
}
