class DataResolverCacheService {
  private prevRouteName: string = '';
  private currRouteName: string = '';
  private cachedData: Array<Record<string, any>> = [];

  setRouteName(routeName: string): void {
    this.currRouteName = routeName;
  }
  cacheResolvedData(data: Array<Record<string, any>>): void {
    this.cachedData = data.map((item) => {
      const keys = Object.keys(item);
      let len = keys.length;
      const result: Record<string, any> = {};

      while (len--) {
        const key = keys[len];
        result[key] = Promise.resolve(item[key]);
      }
      return result;
    });
  }
  getDataForState(): Array<Record<string, any>> {
    if (!this.prevRouteName) {
      this.prevRouteName = this.currRouteName;
      return [];
    }
    const prev = this.prevRouteName.split('.');
    const curr = this.currRouteName.split('.');
    const endIndex = Math.min(curr.length, prev.length);
    const prevPartition = prev.slice(0, endIndex);
    const currPartition = curr.slice(0, endIndex);

    this.prevRouteName = this.currRouteName;

    if (prevPartition.join('') === currPartition.join('')) {
      return this.cachedData;
    }

    return [];
  }
}

export const dataResolverCacheService = new DataResolverCacheService();
